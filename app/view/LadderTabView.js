/*
 * File: app/view/LadderTabView.js
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

Ext.define('Coh2Ladder.view.LadderTabView', {
    extend: 'Ext.Container',
    alias: 'widget.laddertabview',

    requires: [
        'Ext.Toolbar',
        'Ext.SegmentedButton',
        'Coh2Ladder.view.LadderCarousel',
        'Ext.Button',
        'Ext.data.Store'
    ],

    config: {
        layout: {
            type: 'fit'
        },
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                items: [
                    {
                        xtype: 'segmentedbutton',
                        itemId: 'gameModeButtons',
                        items: [
                            {
                                xtype: 'button',
                                text: '...'
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        docked: 'right',
                        layout: {
                            type: 'hbox'
                        },
                        items: [
                            {
                                xtype: 'button',
                                itemId: 'searchButton',
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
                ]
            },
            {
                xtype: 'container',
                itemId: 'ladderStack',
                layout: {
                    animation: 'flip',
                    type: 'card'
                }
            }
        ]
    }

});