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
  var setupSerial = `Serial.begin(9600);`;
  var wifiSetupCode = `while (status != WL_CONNECTED) {
    Serial.println("Attempting to connect to WPA SSID: ${ssid}");
    status = WiFi.begin("${ssid}", "${password}");
    delay(4000);
  }
  Serial.println("connected!");`;
  Blockly.Arduino.addVariable("wifiStatus",`int status = WL_IDLE_STATUS;`);
  Blockly.Arduino.addSetup('serial', setupSerial, true);
  Blockly.Arduino.addSetup('wifi', wifiSetupCode, true);
  var code = '';
  return code;
};
