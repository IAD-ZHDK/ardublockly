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
  },

  onchange: function(event) {
    if (!this.workspace || event.type == Blockly.Events.MOVE ||
        event.type == Blockly.Events.UI) {
      return;  // Block deleted or irrelevant event
    }
    var ID = Blockly.Arduino.valueToCode(
        this, "LEDNUMBER", Blockly.Arduino.ORDER_ATOMIC)
    if (ID > 4) {
      this.setWarningText("LEDs can only have an ID of 0, 1, 2, 3 or 4", 'mkrIoTCarrier_led');
    }  else {
      this.setWarningText(null, 'mkrIoTCarrier_led');
    }
  },
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
        .appendField("Buzzer")
    this.appendValueInput('FREQUENCY')
        .setCheck(Blockly.Types.NUMBER.checkList)
        .appendField(Blockly.Msg.ARD_TONEFREQ)
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Set frequency of Buzzer on the IOT Carrier");
  },

  onchange: function(event) {
    if (!this.workspace || event.type == Blockly.Events.MOVE ||
        event.type == Blockly.Events.UI) {
      return;  // Block deleted or irrelevant event
    }
    var freq = Blockly.Arduino.valueToCode(
        this, "FREQUENCY", Blockly.Arduino.ORDER_ATOMIC)
    if (freq == 0) {
      this.setWarningText(null, 'mkrIoTCarrier_Buzzer');
    } else if (freq < 31 || freq > 65535) {
      this.setWarningText(Blockly.Msg.ARD_TONE_WARNING, 'mkrIoTCarrier_Buzzer');
    } else {
      this.setWarningText(null, 'mkrIoTCarrier_Buzzer');
    }
  },
  /** @return {!string} The type of input value for the block, an integer. */
  getBlockType: function() {
    return Blockly.Types.NUMBER;
  }
};