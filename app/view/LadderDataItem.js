/*
 * File: app/view/LadderDataItem.js
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

Ext.define('Coh2Ladder.view.LadderDataItem', {
    extend: 'Ext.dataview.component.DataItem',
    alias: 'widget.ladderdataitem',

    config: {
        cls: 'ladder-row',
        layout: {
            type: 'hbox'
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
        ],
        items: [
            {
                xtype: 'component',
                flex: 1,
                cls: [
                    'ladder-cell',
                    'rank'
                ],
                itemId: 'rank'
            },
            {
                xtype: 'image',
                flex: 1,
                cls: [
                    'ladder-cell',
                    'xp'
                ],
                itemId: 'xp',
                src: 'null'
            },
            {
                xtype: 'component',
                flex: 3,
                cls: [
                    'ladder-cell',
                    'player'
                ],
                itemId: 'playerName'
            },
            {
                xtype: 'component',
                flex: 1,
                cls: [
                    'ladder-cell',
                    'wins'
                ],
                itemId: 'wins'
            },
            {
                xtype: 'component',
                flex: 1,
                cls: [
                    'ladder-cell',
                    'losses'
                ],
                itemId: 'losses'
            },
            {
                xtype: 'component',
                flex: 1,
                cls: [
                    'ladder-cell',
                    'percentage'
                ],
                itemId: 'percentage'
            },
            {
                xtype: 'component',
                flex: 1,
                cls: [
                    'ladder-cell',
                    'streak'
                ],
                itemId: 'streak'
            },
            {
                xtype: 'component',
                flex: 1,
                cls: [
                    'ladder-cell',
                    'drops'
                ],
                itemId: 'drops'
            },
            {
                xtype: 'component',
                flex: 1,
                cls: [
                    'ladder-cell',
                    'disputes'
                ],
                itemId: 'disputes'
            }
        ]
    },

    updateRecord: function(record) {
        var player = record.players().first();
        var cmp = Ext.bind(this.getComponent, this);

        var wins = record.get('wins'),
            losses = record.get('losses'),
            total = wins + losses,
            percentage = (wins / total * 100).toFixed(1),
            streak = record.get('streak'),
            streakCls = streak > 0 ? 'positive' : 'negative';

        streak = (streak > 0) ? ('+' + streak) : streak;

        cmp('rank').setHtml(record.get('rank'));
        cmp('xp').setSrc('resources/images/levels/' + this.getLevelImages()[player.get('level')]);
        cmp('playerName').setHtml('<div>' + player.get('name') + '</div>');
        cmp('wins').setHtml(wins);
        cmp('losses').setHtml(losses);
        cmp('percentage').setHtml(percentage);
        cmp('streak').replaceCls(['positive', 'negative'], streakCls);
        cmp('streak').setHtml(streak);
        cmp('drops').setHtml(record.get('drops'));
        cmp('disputes').setHtml(record.get('disputes'));
    }

});