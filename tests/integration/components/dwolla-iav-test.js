import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('dwolla-iav', 'Integration | Component | dwolla iav', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{dwolla-iav}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#dwolla-iav}}
      template block text
    {{/dwolla-iav}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
