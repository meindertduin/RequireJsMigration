define([
    'jquery',
    'backbone',
    'handlebars/dist/cjs/handlebars',
], function ($, backbone, Handlebars) {
    return backbone.View.extend({
        el: '#app',
        template: `
            <div class="container">
                <h1>Te doen lijst</h1>
                
                <div class="input-container">
                    <input id="todo-input" type="text" placeholder="Vul een taak in">
                    <button id="add-todo" type="submit">Voeg toe</button>
                </div>
                
                <h4>Taakjes</h4>
                {{#each .}}
                <div class="todo-card">
                    <span class="card-title">{{title}}</span>
                    <button class="todo-close-button" index="{{@index}}">
                    ✔️
                    </button>
                </div>
                {{/each}}
                
            </div>
        `,
        compiledTemplate: null,

        items: [],
        
        initialize: function () {
            this.compiledTemplate = Handlebars.compile(this.template);   
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
    })
})