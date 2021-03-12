/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Blocks for the Arduino mqtt communcations.
 *     The Arduino built in functions syntax can be found at:
 *     http://arduino.cc/en/Reference/HomePage
 *
 */
'use strict';

goog.provide('Blockly.Blocks.mqtt');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');


/** Common HSV hue for all blocks in this category. */
Blockly.Blocks.mqtt.HUE = 25;

Blockly.Blocks['mqtt_setup'] = {
  /**
   * Block for setting the speed of the WIFI connection.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('https://www.shiftr.io/docs/manuals/arduino/');
    this.setColour(Blockly.Blocks.mqtt.HUE);
    this.appendDummyInput()
        .appendField("Setup MQTT Client")
    this.appendDummyInput()
        .appendField("Broker: ")
        .appendField(new Blockly.FieldTextInput("public.cloud.shiftr.io"), 'BROKER')
        .appendField("Port: ")
        .appendField(new Blockly.FieldTextInput("1883"), 'PORT')
    this.appendDummyInput()
        .appendField("Device Id: ")
        .appendField(new Blockly.FieldTextInput("arduino"), 'DEVICE')
    this.appendDummyInput()
        .appendField("Username: ")
        .appendField(new Blockly.FieldTextInput(""), 'USERNAME')
        .appendField("Password: ")
        .appendField(new Blockly.FieldTextInput(""), 'PASSWORD')
    this.setInputsInline(false);
    this.setTooltip("Begin MQTT connection with specified credentials.");
  }
};

Blockly.Blocks['mqtt_publish'] = {
  /**
   * Block for MQTT publish
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('https://www.shiftr.io/docs/manuals/arduino/');
    this.setColour(Blockly.Blocks.mqtt.HUE);
    this.appendValueInput('PAYLOAD')
        .appendField("on MQTT topic ")
        .appendField(new Blockly.FieldTextInput("/"), 'TOPIC')
        .appendField("publish")
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("publish MQTT message");
  }
};