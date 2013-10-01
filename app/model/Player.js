/*
 * File: app/model/Player.js
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

Ext.define('Coh2Ladder.model.Player', {
    extend: 'Ext.data.Model',

    uses: [
        'Coh2Ladder.model.Rank'
    ],

    statics: {
        getBannedSteamIds: function() {
            return [
            //76561198016776720, // - BartonPL --done
            //76561198012811763, // - VonIvan --done
            //76561197980175112 // - BaoLiang --done
            ];
        },

        levelImages: [
            'rank_01_private_class_1.png',
            'rank_01_private_class_2.png',
            'rank_01_private_class_3.png',
            'rank_01_private_class_4.png',
            'rank_01_private.png',
            'rank_02_senior_private_class_1.png',
            'rank_02_senior_private_class_2.png',
            'rank_02_senior_private_class_3.png',
            'rank_02_senior_private_class_4.png',
            'rank_02_senior_private.png',
            'rank_03_corporal_class_1.png',
            'rank_03_corporal_class_2.png',
            'rank_03_corporal_class_3.png',
            'rank_03_corporal_class_4.png',
            'rank_03_corporal.png',
            'rank_04_senior_corporal_class_1.png',
            'rank_04_senior_corporal_class_2.png',
            'rank_04_senior_corporal_class_3.png',
            'rank_04_senior_corporal_class_4.png',
            'rank_04_senior_corporal.png',
            'rank_05_junior_sergeant_class_1.png',
            'rank_05_junior_sergeant_class_2.png',
            'rank_05_junior_sergeant_class_3.png',
            'rank_05_junior_sergeant_class_4.png',
            'rank_05_junior_sergeant.png',
            'rank_06_sergeant_class_1.png',
            'rank_06_sergeant_class_2.png',
            'rank_06_sergeant_class_3.png',
            'rank_06_sergeant_class_4.png',
            'rank_06_sergeant.png',
            'rank_07_senior_sergeant_class_1.png',
            'rank_07_senior_sergeant_class_2.png',
            'rank_07_senior_sergeant_class_3.png',
            'rank_07_senior_sergeant_class_4.png',
            'rank_07_senior_sergeant.png',
            'rank_08_master_sergeant_class_1.png',
            'rank_08_master_sergeant_class_2.png',
            'rank_08_master_sergeant_class_3.png',
            'rank_08_master_sergeant_class_4.png',
            'rank_08_master_sergeant.png',
            'rank_09_sergeant_major_class_1.png',
            'rank_09_sergeant_major_class_2.png',
            'rank_09_sergeant_major_class_3.png',
            'rank_09_sergeant_major_class_4.png',
            'rank_09_sergeant_major.png',
            'rank_10_warrant_officer_class_1.png',
            'rank_10_warrant_officer_class_2.png',
            'rank_10_warrant_officer_class_3.png',
            'rank_10_warrant_officer_class_4.png',
            'rank_10_warrant_officer.png',
            'rank_11_senior_warrant_officer_class_1.png',
            'rank_11_senior_warrant_officer_class_2.png',
            'rank_11_senior_warrant_officer_class_3.png',
            'rank_11_senior_warrant_officer_class_4.png',
            'rank_11_senior_warrant_officer.png',
            'rank_12_junior_lieutenant_class_1.png',
            'rank_12_junior_lieutenant_class_2.png',
            'rank_12_junior_lieutenant_class_3.png',
            'rank_12_junior_lieutenant_class_4.png',
            'rank_12_junior_lieutenant.png',
            'rank_13_lieutenant_class_1.png',
            'rank_13_lieutenant_class_2.png',
            'rank_13_lieutenant_class_3.png',
            'rank_13_lieutenant_class_4.png',
            'rank_13_lieutenant.png',
            'rank_14_senior_lieutenant_class_1.png',
            'rank_14_senior_lieutenant_class_2.png',
            'rank_14_senior_lieutenant_class_3.png',
            'rank_14_senior_lieutenant_class_4.png',
            'rank_14_senior_lieutenant.png',
            'rank_15_captain_class_1.png',
            'rank_15_captain_class_2.png',
            'rank_15_captain_class_3.png',
            'rank_15_captain_class_4.png',
            'rank_15_captain.png',
            'rank_16_senior_captain_class_1.png',
            'rank_16_senior_captain_class_2.png',
            'rank_16_senior_captain_class_3.png',
            'rank_16_senior_captain_class_4.png',
            'rank_16_senior_captain.png',
            'rank_17_major_class_1.png',
            'rank_17_major_class_2.png',
            'rank_17_major_class_3.png',
            'rank_17_major_class_4.png',
            'rank_17_major.png',
            'rank_18_lieutenant_colonel_class_1.png',
            'rank_18_lieutenant_colonel_class_2.png',
            'rank_18_lieutenant_colonel_class_3.png',
            'rank_18_lieutenant_colonel_class_4.png',
            'rank_18_lieutenant_colonel.png',
            'rank_19_colonel_class_1.png',
            'rank_19_colonel_class_2.png',
            'rank_19_colonel_class_3.png',
            'rank_19_colonel_class_4.png',
            'rank_19_colonel.png',
            'rank_20_brigadier_general_class_1.png',
            'rank_20_brigadier_general_class_2.png',
            'rank_20_brigadier_general_class_3.png',
            'rank_20_brigadier_general_class_4.png',
            'rank_20_brigadier_general.png',
            'rank_21_major_general.png'
        ]
    },

    config: {
        fields: [
            {
                name: 'id'
            },
            {
                mapping: 'alias',
                name: 'name',
                type: 'string'
            },
            {
                convert: function(v, rec) {
                    return (/^\/steam\/(.*)$/).exec(v)[1];
                },
                mapping: 'name',
                name: 'steam_id',
                type: 'string'
            },
            {
                mapping: 'name',
                // TODO
                name: 'steam_avatar_url',
                type: 'string'
            },
            {
                convert: function(v, rec) {
                    return 'http://steamcommunity.com/profiles/' + (/^\/steam\/(.*)$/).exec(v)[1];
                },
                mapping: 'name',
                name: 'steam_profile_url',
                type: 'string'
            },
            {
                convert: function(v, rec) {
                    // TODO Calculate correct level
                    return v % 100;
                },
                mapping: 'xp',
                name: 'level',
                type: 'int'
            },
            {
                mapping: 'xp',
                name: 'experience',
                type: 'int'
            },
            {
                mapping: 'xp',
                name: 'level_image',
                type: 'string',
                convert: function(v, rec) {
                    // TODO Calculate correct level
                    var level = v % 100;
                    return 'resources/images/levels/' + Coh2Ladder.model.Player.levelImages[level];
                }
            },
            {
                name: 'percentage',
                type: 'float',
                convert: function(v, rec) {
                    var wins = rec.get('wins'),
                        losses = rec.get('losses');

                    return (wins / (wins + losses)).toFixed(1);
                }
            }
        ],
        hasMany: {
            model: 'Coh2Ladder.model.Rank'
        },
        proxy: {
            type: 'memory',
            batchActions: false,
            reader: {
                type: 'json'
            }
        }
    },

    isBanned: function() {
        return Coh2Ladder.model.Player.getBannedSteamIds().indexOf(this.get('steam_id')) != -1;
    }

});
