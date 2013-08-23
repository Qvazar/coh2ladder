/*
 * File: app/controller/LadderTabController.js
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

Ext.define('Coh2Ladder.controller.LadderTabController', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            ladderStack: '#ladderStack',
            gameModeButtons: '#gameModeButtons'
        },

        control: {
            "laddertabview #gameModeButtons button": {
                tap: 'onGameModeButtonTap'
            }
        }
    },

    onGameModeButtonTap: function(button, e, eOpts) {
        var index = this.getGameModeButtons().getItems().indexOf(button),
            ladderStack = this.getLadderStack(),
            currentIndex = ladderStack.getItems().indexOf(ladderStack.getActiveItem()),
            animateDirection = index > currentIndex ? 'left' : 'right';

        ladderStack.animateActiveItem(index, {
            type: 'flip',
            direction: animateDirection
        });

    },

    launch: function() {
        this.gameModeStore = Ext.create('Ext.data.Store', {
            model: 'Coh2Ladder.model.GameMode',
            sorters: 'name'
        });

        this.factionStore = Ext.create('Ext.data.Store', {
            model: 'Coh2Ladder.model.Faction',
            sorters: 'name'
        });

        this.playerStore = Ext.create('Ext.data.Store', {
            model: 'Coh2Ladder.model.Player'
        });
        // Need to load here to correctly load the data, as the first record loaded through associations is wrong..
        this.playerStore.load();

        var gameModeButtons = this.getGameModeButtons(),
            ladderStack = this.getLadderStack();

        gameModeButtons.removeAll(true);

        this.gameModeStore.load(function(gameModes) {
            this.factionStore.load(function(factions) {

                gameModes.forEach(function(gameMode, gmIndex) {

                    var name = gameMode.get('name'),
                        gameModeId = gameMode.get('id');

                    gameModeButtons.add({
                        xtype: 'button',
                        text: name
                    });

                    ladderStack.add({
                        xtype: 'laddercarousel',
                        gameModeId: gameModeId,
                        cls: [ 'gamemodepage', gameModeId ],
                        items: (function() {

                            var items = [];

                            factions.forEach(function(faction) {
                                var factionId = faction.get('id');

                                items.push({
                                    xtype: 'ladderpage',
                                    factionId: factionId,
                                    gameModeId: gameModeId,
                                    cls: [ 'factionpage', factionId ]
                                });
                            }, this);

                            return items;
                        }())
                    });
                });

                gameModeButtons.setPressedButtons([0]);

            }, this);
        }, this);
    }

});