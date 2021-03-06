/*
 * File: app/view/PlayerToolbarSegment.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.2.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Coh2Ladder.view.PlayerToolbarSegment', {
    extend: 'Ext.Container',
    alias: 'widget.playertoolbarsegment',

    config: {
        docked: 'right',
        layout: {
            type: 'hbox'
        },
        items: [
            {
                xtype: 'button',
                itemId: 'playerSearchButton',
                ui: 'plain',
                iconCls: 'search'
            },
            {
                xtype: 'button',
                itemId: 'infoButton',
                ui: 'plain',
                iconCls: 'info',
                text: ''
            }
        ]
    }

});