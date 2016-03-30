/**
 * Created by maxencecornet on 30/03/2016.
 */
sitemaps.config('rootUrl', 'http://www.rankmeteor.com/');

sitemaps.add('/sitemap.xml', function () {
    return [{
        page: '/',
        changefreq: 'weekly'
    }, {
        page: '/bad',
        changefreq: 'weekly'
    }, {
        page: '/packages',
        changefreq: 'weekly'
    }
    ];
});