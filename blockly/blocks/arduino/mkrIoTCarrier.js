/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Blocks for the Arduino wifi communcations.
 *     The Arduino built in functions syntax can be found at:
 *     http://arduino.cc/en/Reference/HomePage
 *
 */
'use strict';

goog.provide('Blockly.Blocks.mkrIoTCarrier');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');


/** Common HSV hue for all blocks in this category. */
Blockly.Blocks.mkrIoTCarrier.HUE = 30;

Blockly.Blocks['mkrIoTCarrier_led'] = {
  /**
   * Block for controlling LEDS
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('https://www.arduino.cc/education/explore-iot-kit');
    this.setColour(Blockly.Blocks.mkrIoTCarrier.HUE);
    this.appendDummyInput()
        .appendField("set IOT Carrier LED color ")
    this.appendValueInput('LEDNUMBER')
        .setCheck(Blockly.Types.NUMBER.checkList)
        .appendField("LED Number");
    this.appendValueInput('RED')
        .setCheck(Blockly.Types.NUMBER.checkList)
        .appendField("red: ");
    this.appendValueInput('GREEN')
        .setCheck(Blockly.Types.NUMBER.checkList)
        .appendField("green: ");
    this.appendValueInput('BLUE')
        .setCheck(Blockly.Types.NUMBER.checkList)
        .appendField("blue:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Set one LED on the IOT Carrier");
  }
};


Blockly.Blocks['mkrIoTCarrier_Buzzer'] = {
  /**
   * Block for controlling LEDS
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('https://www.arduino.cc/education/explore-iot-kit');
    this.setColour(Blockly.Blocks.mkrIoTCarrier.HUE);
    this.appendDummyInput()
        .appendField("Buzzer ")
    this.appendValueInput('FREQUENCY')
        .setCheck(Blockly.Types.NUMBER.checkList)
        .appendField(Blockly.Msg.ARD_TONEFREQ)
        .appendField("Frequency:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Set frequency of Buzzer on the IOT Carrier");
  }
};