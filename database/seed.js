var seeder = require('mongoose-seed');

// Connect to MongoDB via Mongoose
seeder.connect('mongodb://localhost/todo', function () {
    // Load Mongoose models
    seeder.loadModels([
        './models/items',
    ]);

    // Clear specified collections
    seeder.clearModels(['Item'], function () {
        // Callback to populate DB once collections have been cleared
        seeder.populateModels(data, function () {
            seeder.disconnect();
        });
    });
});

// Data array containing seed data - documents organized by Model
var data = [
    {
        'model': 'Item',
        'documents': [
            { description: 'Go to Store' },
            { description: 'Go to School' },
            { description: 'Wash hair' },
            { description: 'Brush teeth' },
            { description: 'Wash Face' },
            { description: 'Finish Project' },
            { description: 'Start Project' }
        ]
    }

];