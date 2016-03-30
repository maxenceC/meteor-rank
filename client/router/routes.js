/**
 * Created by maxencecornet on 30/03/2016.
 */
Router.route('add');

Router.route('bad', {
    data() {
        return Apps.find({}, {sort: {rank: 1}});
    },
    waitOn() {
        Meteor.subscribe('appsAdmin', Session.get('q'));
    },
});

Router.route('packages', {
    data() {
        console.log(Packages.find({}, {sort: {rank: 1}}).fetch());
        return Packages.find({}, {sort: {rank: 1}});
    },
    waitOn() {
        Meteor.subscribe('packages');
    },
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
});


