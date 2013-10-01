/*
 * File: app/model/Rank.js
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

Ext.define('Coh2Ladder.model.Rank', {
    extend: 'Ext.data.Model',

    uses: [
        'Coh2Ladder.model.Faction',
        'Coh2Ladder.model.GameMode',
        'Coh2Ladder.model.Player'
    ],

    config: {
        fields: [
            {
                name: 'id'
            },
            {
                convert: function(v, rec) {
                    return 'faction-' + v;
                },
                mapping: 'stat.raceID',
                name: 'faction_id'
            },
            {
                convert: function(v, rec) {
                    return 'gamemode-' + v;
                },
                mapping: 'stat.matchTypeID',
                name: 'gamemode_id'
            },
            {
                mapping: 'stat.ranking',
                name: 'rank',
                type: 'int'
            },
            {
                mapping: 'stat.wins',
                name: 'wins',
                type: 'int'
            },
            {
                mapping: 'stat.losses',
                name: 'losses',
                type: 'int'
            },
            {
                name: 'percentage',
                type: 'float',
                convert: function(v, rec) {
                    var wins = rec.get('wins'),
                        losses = rec.get('losses');

                    return (wins / (wins + losses)).toFixed(1);
                }
            },
            {
                mapping: 'stat.streak',
                name: 'streak',
                type: 'int'
            },
            {
                mapping: 'stat.drops',
                name: 'drops',
                type: 'int'
            },
            {
                mapping: 'stat.disputes',
                name: 'disputes',
                type: 'int'
            }
        ],
        hasOne: [
            {
                model: 'Coh2Ladder.model.Faction'
            },
            {
                model: 'Coh2Ladder.model.GameMode'
            }
        ],
        hasMany: {
            associationKey: 'statGroup.members',
            model: 'Coh2Ladder.model.Player'
        },
        proxy: {
            type: 'ajax',
            enablePagingParams: false,
            extraParams: {
                key: 'coh2org832adfeb'
            },
            url: 'data/ladder-faction0-gametype1.json',
            reader: {
                type: 'json',
                rootProperty: 'data',
                successProperty: 'data'
            }
        }
    },

    onJsonException: function(reader, response, error, eOpts) {
        debugger;
        alert(error);
    }

});
