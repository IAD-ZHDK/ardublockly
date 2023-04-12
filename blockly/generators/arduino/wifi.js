/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Code generator for the Arduino wifi blocks.
 *     Arduino wifi library docs: https://www.arduino.cc/en/Reference/WiFiNINABegin
 *
 */
'use strict';

goog.provide('Blockly.Arduino.wifi');

goog.require('Blockly.Arduino');


/**
 * Code generator for block for setting up the wifi connection
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code.
 */
Blockly.Arduino['wifi_setup'] = function(block) {
  Blockly.Arduino.addInclude('spi', '#include <SPI.h>');
  Blockly.Arduino.addInclude('wifiNina', '#include <WiFiNINA.h>');

  var ssid = block.getFieldValue('SSID');
  var password = block.getFieldValue('PASSWORD');
  
  var serialSpeed = 9600;
  var serialSetupCode = 'Serial.begin(' + serialSpeed + ');';
  Blockly.Arduino.addSetup('serial_Serial', serialSetupCode, true);

  var wifiSetupCode = `while (status != WL_CONNECTED) {
    Serial.println("Attempting to connect to WPA SSID: ${ssid}");
    status = WiFi.begin("${ssid}", "${password}");
    delay(4000);
  }
  Serial.println("connected!");`;
  Blockly.Arduino.addVariable("wifiStatus",`int status = WL_IDLE_STATUS;`);
 
  Blockly.Arduino.addSetup('wifi', wifiSetupCode, true);
  var code = '';
  return code;
};


Blockly.Arduino['Nina_led'] = function(block) {
  Blockly.Arduino.addInclude('wifiNina', '#include <WiFiNINA.h>');
  Blockly.Arduino.addInclude('wifi_drv', '#include <utility/wifi_drv.h>');
  var red = Blockly.Arduino.valueToCode(block, 'RED', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var green =  Blockly.Arduino.valueToCode(block, 'GREEN', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var blue =  Blockly.Arduino.valueToCode(block, 'BLUE', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var code = `WiFiDrv::analogWrite(26, ${red});\n`;
  code += `WiFiDrv::analogWrite(25, ${green});\n`;
  code += `WiFiDrv::analogWrite(27, ${blue});\n`;

  Blockly.Arduino.addSetup('wifiLEDpins', 'WiFiDrv::pinMode(25, OUTPUT);  //GREEN\n' +
      '  WiFiDrv::pinMode(26, OUTPUT);  //RED\n' +
      '  WiFiDrv::pinMode(27, OUTPUT);  //BLUE', true);
  return code;
};

Blockly.Arduino['Nina_led_hsb'] = function(block) {
  Blockly.Arduino.addInclude('wifiNina', '#include <WiFiNINA.h>');
  Blockly.Arduino.addInclude('wifi_drv', '#include <utility/wifi_drv.h>');

  let hue = Blockly.Arduino.valueToCode(block, 'HUE', Blockly.Arduino.ORDER_ATOMIC) || '0';
  let saturation =  Blockly.Arduino.valueToCode(block, 'SATURATION', Blockly.Arduino.ORDER_ATOMIC) || '0';
  let brightness =  Blockly.Arduino.valueToCode(block, 'BRIGHTNESS', Blockly.Arduino.ORDER_ATOMIC) || '0';

  Blockly.Arduino.addFunction("fract", `float fract(float x) { return x - int(x); }`)
  Blockly.Arduino.addFunction("mix", `float mix(float a, float b, float t) { return a + (b - a) * t; }`)
  Blockly.Arduino.addFunction("step", `float step(float e, float x) { return x < e ? 0.0 : 1.0; }`)
  Blockly.Arduino.addFunction("setLEDFromHSB", `void setLEDFromHSB(float h, float s, float b) {
    h = h / 360.0;
    s = s / 100.0;
    b = b / 100.0;
  
    int red = b * mix(1.0, constrain(abs(fract(h + 1.0) * 6.0 - 3.0) - 1.0, 0.0, 1.0), s) * 255;
    int green = b * mix(1.0, constrain(abs(fract(h + 0.6666666) * 6.0 - 3.0) - 1.0, 0.0, 1.0), s) * 255;
    int blue = b * mix(1.0, constrain(abs(fract(h + 0.3333333) * 6.0 - 3.0) - 1.0, 0.0, 1.0), s) * 255;
    
    WiFiDrv::analogWrite(26, red);
    WiFiDrv::analogWrite(25, green);
    WiFiDrv::analogWrite(27, blue);
  }`)

  Blockly.Arduino.addSetup('wifiLEDpins', 'WiFiDrv::pinMode(25, OUTPUT);  //GREEN\n' +
      '  WiFiDrv::pinMode(26, OUTPUT);  //RED\n' +
      '  WiFiDrv::pinMode(27, OUTPUT);  //BLUE', true);


  return `setLEDFromHSB(${hue}, ${saturation}, ${brightness});`
};


/**
 * Code generator for block for setting up the OSC connection
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code.
 */
Blockly.Arduino['OSC_setup'] = function(block) {
  Blockly.Arduino.addInclude('UDP', '#include <WiFiUdp.h>');
  Blockly.Arduino.addInclude('wifiNina', '#include <WiFiNINA.h>');
  Blockly.Arduino.addInclude('OSC', '#include <OSCMessage.h>');

  Blockly.Arduino.addVariable("WiFiUDP",`WiFiUDP Udp;`, true);


  var port = block.getFieldValue('PORT');
  Blockly.Arduino.addVariable("remotePort",`const int remotePort = ${port};`, true);
  
  var serialSpeed = 9600;
  var serialSetupCode = 'Serial.begin(' + serialSpeed + ');';
  Blockly.Arduino.addSetup('serial_Serial', serialSetupCode, true);

  var OSCSetupCode = `Udp.begin(${port});
  IPAddress ip = WiFi.localIP();
  Serial.print("IP Address: ");
  Serial.println(ip);
  `;

  Blockly.Arduino.addSetup('OSCsetup', OSCSetupCode, true);
  var code = '';
  return code;
};

/**
 * Code generator for block for publish payload on specific topic
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code.
 */
Blockly.Arduino['OSC_publish'] = function(block) {
  let topic = Blockly.Arduino.valueToCode(block, 'TOPIC', Blockly.Arduino.ORDER_ATOMIC); // this will need to be formated as "/topic/"
  let payload = Blockly.Arduino.valueToCode(block, 'PAYLOAD', Blockly.Arduino.ORDER_ATOMIC) || '0';
  let remoteAddress = Blockly.Arduino.valueToCode(block, 'REMOTEADRESS', Blockly.Arduino.ORDER_ATOMIC) || '0'; 
  let code = `OSCMessage msg(${topic});

  // convert to char array
  String str = String(${payload});
  int str_len = str.length() + 1; 
  char char_array[str_len];
  str.toCharArray(char_array, str_len);
  //
  msg.add(char_array);
  Udp.beginPacket(${remoteAddress}, remotePort);
  msg.send(Udp); // send the bytes to the SLIP stream
  Udp.endPacket(); // mark the end of the OSC Packet
  msg.empty(); // free space occupied by message`;
  return code;
};

/**
 * Code generator for block for publish payload on specific topic
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code.
 */
Blockly.Arduino['OSC_subscribe'] = function(block) {
  let varName = Blockly.Arduino.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  let topic = Blockly.Arduino.valueToCode(block, 'TOPIC', Blockly.Arduino.ORDER_ATOMIC);

  //Blockly.Arduino.addSetup(`mqttSub_${topic}`, `client.subscribe(${topic});`)
  //Blockly.Arduino.appendFunction(messageReceivedName, `  
 ////  ${varName} = payload;
 // }`)

 Blockly.Arduino.addFunction("OSCMsgReceive", `void OSCMsgReceive() {
  OSCMessage msgIN;
  int size;
  if ((size = Udp.parsePacket()) > 0) {
    while (size--) {
        msgIN.fill(Udp.read());
    }
    if (!msgIN.hasError()) {
      msgIN.route(${topic}, oscString);
    } else {
        // Serial.print(msgIN.hasError());
    }
  }
}`)

Blockly.Arduino.addFunction("oscString", `void oscString(OSCMessage& msg, int addrOffset) {
  boolean error;
  if (msg.isString(0))  //only if theres a number
  {
    char buf[] = "";
    msg.getString(0, buf);
    ${varName} = String(buf);      //convert char array to string here.
  } else {
    error = 0;  //trow an error
  }
  // 
 }`)

  let code = `OSCMsgReceive();`;
  return code;
};