/**
 * Created by maxencecornet on 30/03/2016.
 */
sitemaps.add('/sitemap.xml', function () {
    return [{
        page: '/',
        changefreq: 'weekly'
    }, {
        page: '/bad',
        changefreq: 'weekly'
    }
    ];
});