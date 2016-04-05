/**
 * Created by maxencecornet on 30/03/2016.
 */
Router.route('add', {
    action() {
        Meta.setTitle('Add a meteor application');
        Meta.set('og:title', 'Discover applications built with Meteor framework');
        Meta.set('og:description', 'rankMeteor ranks meteor applications based on their alexa ranks, discover how large meteor apps are built, trends and popular meteor package');
        Meta.set('description', 'rankMeteor ranks meteor applications based on their alexa ranks, discover how large meteor apps are built, trends and popular meteor package');
        Meta.set('og:keywords', 'meteor applications, applications built with meteor, websites built with meteor, meteor packages, packages, largest meteor app, biggest meteor website, meteor 1.3');
        Meta.set('keywords', 'meteor applications, applications built with meteor, websites built with meteor, meteor packages, packages, largest meteor app, biggest meteor website, meteor 1.3');
        this.render();
    }
});

Router.route('bad', {
    data() {
        return Apps.find({}, {sort: {rank: 1}});
    },
    waitOn() {
        Meteor.subscribe('appsAdmin', Session.get('q'));
    },
    action() {
        Meta.setTitle('Discover applications built with Meteor framework');
        Meta.set('og:title', 'Discover applications built with Meteor framework');
        Meta.set('og:description', 'rankMeteor ranks meteor applications based on their alexa ranks, discover how large meteor apps are built, trends and popular meteor package');
        Meta.set('description', 'rankMeteor ranks meteor applications based on their alexa ranks, discover how large meteor apps are built, trends and popular meteor package');
        Meta.set('og:keywords', 'meteor applications, applications built with meteor, websites built with meteor, meteor packages, packages, largest meteor app, biggest meteor website, meteor 1.3');
        Meta.set('keywords', 'meteor applications, applications built with meteor, websites built with meteor, meteor packages, packages, largest meteor app, biggest meteor website, meteor 1.3');
        this.render();
    }
});

Router.route('packages', {
    data() {
        console.log(Packages.find({}, {sort: {rank: 1}}).fetch());
        return Packages.find({}, {sort: {rank: 1}});
    },
    waitOn() {
        Meteor.subscribe('packages');
    },
    action() {
        Meta.setTitle('Discover the most popular meteor packages');
        Meta.set('og:title', 'Discover the most popular meteor packages');
        Meta.set('og:description', 'rankMeteor ranks meteor applications based on their alexa ranks, discover how large meteor apps are built, trends and popular meteor package');
        Meta.set('og:keywords', 'best meteor package, meteor applications, applications built with meteor, websites built with meteor, meteor packages, packages, largest meteor app, biggest meteor website, meteor 1.3');
        Meta.set('description', 'rankMeteor ranks meteor applications based on their alexa ranks, discover how large meteor apps are built, trends and popular meteor package');
        Meta.set('keywords', 'best meteor package, meteor applications, applications built with meteor, websites built with meteor, meteor packages, packages, largest meteor app, biggest meteor website, meteor 1.3');
        this.render();

    }
});

Router.route('/:q?', {
    name: 'home',
    onRun() {
        if (this.params.q) Session.set('q', this.params.q);
        this.next();
    },
    data() {
        return Apps.find({}, {sort: {meteorRank: 1}});
    },
    subscriptions() {
        return Meteor.subscribe('apps', Session.get('q'));
    },
    action() {
        Meta.setTitle('Discover applications built with Meteor framework');
        Meta.set('og:title', 'Discover applications built with Meteor framework');
        Meta.set('og:description', 'rankMeteor ranks meteor applications based on their alexa ranks, discover how large meteor apps are built, trends and popular meteor package');
        Meta.set('og:keywords', 'meteor applications, applications built with meteor, websites built with meteor, meteor packages, packages, largest meteor app, biggest meteor website, meteor 1.3');
        Meta.set('description', 'rankMeteor ranks meteor applications based on their alexa ranks, discover how large meteor apps are built, trends and popular meteor package');
        Meta.set('keywords', 'meteor applications, applications built with meteor, websites built with meteor, meteor packages, packages, largest meteor app, biggest meteor website, meteor 1.3');
        this.render();
    }
});




