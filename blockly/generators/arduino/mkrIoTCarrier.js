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

goog.provide('Blockly.Arduino.mkrIoTCarrier_led');

goog.require('Blockly.Arduino');

var webHookCode = 'println("test");';
/**
 * Code generator for block for setting up the ifttt connection
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code.
 */
Blockly.Arduino['mkrIoTCarrier_led'] = function(block) {
 Blockly.Arduino.addInclude('Arduino_MKRIoTCarrier', '#include <Arduino_MKRIoTCarrier.h>');
 var ledNumber = Blockly.Arduino.valueToCode(block, 'LEDNUMBER', Blockly.Arduino.ORDER_ATOMIC) || '0';
 var red = Blockly.Arduino.valueToCode(block, 'RED', Blockly.Arduino.ORDER_ATOMIC) || '0';
 var green =  Blockly.Arduino.valueToCode(block, 'GREEN', Blockly.Arduino.ORDER_ATOMIC) || '0';
 var blue =  Blockly.Arduino.valueToCode(block, 'BLUE', Blockly.Arduino.ORDER_ATOMIC) || '0';
 var code = `carrier.leds.setPixelColor(${ledNumber}`;
 code += `, ${red}`;
 code += `, ${green}`;
 code += `, ${blue}`;
 code += `);\n`;
 code += `carrier.leds.show();\n`;
 Blockly.Arduino.addVariable("MKRIoTCarrierObject",`MKRIoTCarrier carrier;`, true);
 Blockly.Arduino.addSetup('carrierStart', 'carrier.begin();', true);
 //carrier.leds.show();
 return code;
};

Blockly.Arduino['mkrIoTCarrier_Buzzer'] = function(block) {
 Blockly.Arduino.addInclude('Arduino_MKRIoTCarrier', '#include <Arduino_MKRIoTCarrier.h>');
 var frequency = Blockly.Arduino.valueToCode(block, 'FREQUENCY', Blockly.Arduino.ORDER_ATOMIC) || '0';
 if (frequency == 0) {
  code = `carrier.Buzzer.noSound();\n`;
 } else {
  code = `carrier.Buzzer.sound(${frequency});\n`;
 }
 var code;
 Blockly.Arduino.addVariable("MKRIoTCarrierObject",`MKRIoTCarrier carrier;`, true);
 Blockly.Arduino.addSetup('carrierStart', 'carrier.begin();', true);
 //carrier.leds.show();
 return code;
};