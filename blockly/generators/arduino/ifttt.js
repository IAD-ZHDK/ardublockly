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

goog.provide('Blockly.Arduino.ifttt');

goog.require('Blockly.Arduino');

var webHookCode = 'println("test");';
/**
 * Code generator for block for setting up the ifttt connection
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code.
 */
Blockly.Arduino['ifttt_setup'] = function(block) {
 Blockly.Arduino.addInclude('IFTTTMaker', '#include <IFTTTMaker.h>');
  var key = block.getFieldValue('KEY');
  var event = block.getFieldValue('EVENT');
  var param1 = Blockly.Arduino.valueToCode(block, 'PARAM1', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var param2 =  Blockly.Arduino.valueToCode(block, 'PARAM2', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var param3 =  Blockly.Arduino.valueToCode(block, 'PARAM3', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var code = `ifttt.triggerEvent("${event}"`;
  code += `, String(${param1})`;
  code += `, String(${param2})`;
  code += `, String(${param3})`;
  code += `);\n`;
/** Blockly.Arduino.addSetup('ifttt', iftttSetupCode, true); */
  Blockly.Arduino.addVariable("wifiClient",`WiFiSSLClient client;`);
  Blockly.Arduino.addVariable("IFTTTMaker",`IFTTTMaker ifttt("${key}", client);`);
  return code;
};
