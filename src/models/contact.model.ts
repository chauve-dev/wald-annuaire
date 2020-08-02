import { Model } from 'objection';
import knex from '../knex';
import { subController } from '../subController';

import { user } from './user.model';

Model.knex(knex)

export class contact extends Model {
    nom!: string;
    prenom!: string;
    telephone!: string;
    email!: string;
    userid!: number;

    static relationMappings = {
        owner: {
          relation: Model.BelongsToOneRelation,
          modelClass: user,
          join: {
            from: 'contacts.userId',
            to: 'users.id'
          }
        }
      };

    static get tableName() {
        return 'contacts';
    }

    static afterInsert({ inputItems }: any) {
        subController.index('contact', inputItems[0], 'insert')
      }

    static afterUpdate({inputItems}: any){
    subController.index('contact', inputItems[0], 'update')
    }

    static afterDelete(){
    subController.index('contact', {}, 'delete')
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['nom', 'prenom'],
            
            properties: {
                id: {type: 'integer'},
                nom: {type: 'string', minLength: 1, maxLength: 255},
                prenom: {type: 'string', minLength: 1, maxLength: 255},
                telephone: {type: 'string', minLength: 10, maxLength: 10},
                email: {type: 'string', minLength: 1, maxLength: 255},
                userid: {type: 'integer'}
            }
        }
    }
}