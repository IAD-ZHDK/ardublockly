/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Code generator for the Arduino mqtt blocks.
 *     Arduino wifi library docs: https://www.arduino.cc/en/Reference/WiFiNINABegin
 *
 */
'use strict';

goog.provide('Blockly.Arduino.mqtt');

goog.require('Blockly.Arduino');


/**
 * Code generator for block for setting up the mqtt connection
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code.
 */
Blockly.Arduino['mqtt_setup'] = function(block) {
  Blockly.Arduino.addInclude('spi', '#include <SPI.h>');
  Blockly.Arduino.addInclude('wifiNina', '#include <WiFiNINA.h>');
  Blockly.Arduino.addInclude('mqtt', '#include <MQTT.h>');

  var broker = block.getFieldValue('BROKER');
  var port = block.getFieldValue('PORT');
  var device = block.getFieldValue('DEVICE');
  var username = block.getFieldValue('USERNAME');
  var password = block.getFieldValue('PASSWORD');

  var setupSerial = `Serial.begin(9600);`;
  var mqttSetupCode = `client.begin("${broker}", ${port}, net);
  client.onMessage(messageReceived);
  Serial.println("connecting to broker...");
  while (!client.connect("${device}", "${username}", "${password}")) {
    Serial.print(".");
    delay(1000);
  }`;

  Blockly.Arduino.addFunction("messageReceived", `void messageReceived(String &topic, String &payload) {
  Serial.println(topic + ": " + payload);
}`)

  Blockly.Arduino.addVariable("wifiClient",`WiFiClient net;`);
  Blockly.Arduino.addVariable("mqttClient",`MQTTClient client;`);

  Blockly.Arduino.addSetup('serial', setupSerial, true);
  Blockly.Arduino.addSetup('mqtt', mqttSetupCode, true);

  var code = 'client.loop();';
  return code;
};

/**
 * Code generator for block for publish payload on specific topic
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code.
 */
Blockly.Arduino['mqtt_publish'] = function(block) {
  let topic = Blockly.Arduino.valueToCode(block, 'TOPIC', Blockly.Arduino.ORDER_ATOMIC);
  let payload = Blockly.Arduino.valueToCode(block, 'PAYLOAD', Blockly.Arduino.ORDER_ATOMIC) || '0';

  let code = `client.publish(${topic}, ${payload});`;
  return code;
};

/**
 * Code generator for block for publish payload on specific topic
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code.
 */
Blockly.Arduino['mqtt_subscribe'] = function(block) {
  let variable = Blockly.Arduino.valueToCode(block, 'VAR', Blockly.Arduino.ORDER_ATOMIC);
  let topic = Blockly.Arduino.valueToCode(block, 'TOPIC', Blockly.Arduino.ORDER_ATOMIC);

  // todo: implement this!
  console.log("not yet implemented!");

  Blockly.Arduino.addSetup(`mqttSub_${topic}`, `client.subscribe(${topic});`)

  let code = ``;
  return code;
};