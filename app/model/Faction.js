/*
 * File: app/model/Faction.js
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

Ext.define('Coh2Ladder.model.Faction', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            {
                name: 'id'
            },
            {
                name: 'name',
                type: 'string'
            }
        ],
        proxy: {
            type: 'memory',
            data: [
                {
                    id: 'faction-0',
                    name: 'Germans'
                },
                {
                    id: 'faction-1',
                    name: 'Soviets'
                }
            ],
            reader: {
                type: 'json'
            }
        }
    }
});