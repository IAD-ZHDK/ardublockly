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

goog.provide('Blockly.Blocks.ifttt');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');


/** Common HSV hue for all blocks in this category. */
Blockly.Blocks.ifttt.HUE = 50;

Blockly.Blocks['ifttt_setup'] = {
  /**
   * Block for sending ifttt webhook; setting ifttt key, event-name and up to three additional paramenters.
   * TODO: fix so that you can only enter the KEY once
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('https://ifttt.com/maker_webhooks');
    this.setColour(Blockly.Blocks.ifttt.HUE);
    this.appendDummyInput()
        .appendField("set IFTTT key: ")
        .appendField(new Blockly.FieldTextInput(""), 'KEY')
        .appendField(" and event: ")
        .appendField(new Blockly.FieldTextInput(""), 'EVENT')
    this.appendValueInput('PARAM1')
        .setCheck(Blockly.Types.NUMBER.checkList)
        .appendField(" optional parameter 1: ");
    this.appendValueInput('PARAM2')
        .setCheck(Blockly.Types.NUMBER.checkList)
        .appendField(" optional parameter 2: ");
    this.appendValueInput('PARAM3')
        .setCheck(Blockly.Types.NUMBER.checkList)
        .appendField(" optional parameter 3: ");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Send ifttt webhook");
  }
};