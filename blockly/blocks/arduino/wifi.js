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

goog.provide('Blockly.Blocks.wifi');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');


/** Common HSV hue for all blocks in this category. */
Blockly.Blocks.wifi.HUE = 10;

Blockly.Blocks['wifi_setup'] = {
  /**
   * Block for setting the speed of the WIFI connection.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('https://www.arduino.cc/en/Reference/WiFiNINABegin');
    this.setColour(Blockly.Blocks.wifi.HUE);
    this.appendDummyInput()
        .appendField("Setup WiFi with ssid: ")
        .appendField(new Blockly.FieldTextInput(""), 'SSID')
        .appendField(" and password: ")
        .appendField(new Blockly.FieldTextInput(""), 'PASSWORD')
    this.setInputsInline(true);
    this.setTooltip("Begin wifi connection with specified credentials.");
  }
};