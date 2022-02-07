import backbone from 'backbone';
import Handlebars from 'handlebars';
import template from 'text!../templates/AppTemplate.html';

export default backbone.View.extend({
    el: '#app',
    compiledTemplate: null,

    items: [],

    initialize: function () {
        this.compiledTemplate = Handlebars.compile(template);
    },

    render: function () {
        this.$el.html(this.compiledTemplate(this.items));
    },

    events: {
        'click #add-todo': 'onAddTodoClicked',
        'click .todo-close-button': 'onTodoCloseClicked',
    },

    onAddTodoClicked: function (evt) {
        evt.preventDefault();

        const todoTitle = $('#todo-input').val();

        this.items.push({
            title: todoTitle,
        });

        this.$el.html(this.compiledTemplate(this.items));
    },

    onTodoCloseClicked: function (evt) {
        const index = evt.target.getAttribute('index');
        this.items.splice(index, 1);

        this.$el.html(this.compiledTemplate(this.items));
    },
});