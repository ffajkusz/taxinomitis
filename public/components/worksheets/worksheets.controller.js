(function () {

    angular
        .module('app')
        .controller('WorksheetsController', WorksheetsController);

    WorksheetsController.$inject = [
        '$stateParams',
        '$translate',
        '$mdDialog', '$scope'
    ];

    function WorksheetsController($stateParams, $translate, $mdDialog, $scope) {

        var vm = this;

        vm.worksheets = [];
        $translate([
            'WORKSHEETS.SMARTCLASSROOM.TITLE', 'WORKSHEETS.SMARTCLASSROOM.SUMMARY', 'WORKSHEETS.SMARTCLASSROOM.DESCRIPTION',
            'WORKSHEETS.SMARTCLASSROOM.WORKSHEET_1.DESCRIPTION', 'WORKSHEETS.SMARTCLASSROOM.WORKSHEET_1.URL',
            'WORKSHEETS.SMARTCLASSROOM.WORKSHEET_2.DESCRIPTION', 'WORKSHEETS.SMARTCLASSROOM.WORKSHEET_2.URL',
            'WORKSHEETS.SMARTCLASSROOM.WORKSHEET_3.DESCRIPTION', 'WORKSHEETS.SMARTCLASSROOM.WORKSHEET_3.URL',

            'WORKSHEETS.MAKEMEHAPPY.TITLE', 'WORKSHEETS.MAKEMEHAPPY.SUMMARY', 'WORKSHEETS.MAKEMEHAPPY.DESCRIPTION',
            'WORKSHEETS.MAKEMEHAPPY.WORKSHEET_1.DESCRIPTION', 'WORKSHEETS.MAKEMEHAPPY.WORKSHEET_1.URL',
            'WORKSHEETS.MAKEMEHAPPY.WORKSHEET_2.DESCRIPTION', 'WORKSHEETS.MAKEMEHAPPY.WORKSHEET_2.URL',
            'WORKSHEETS.MAKEMEHAPPY.WORKSHEET_3.DESCRIPTION', 'WORKSHEETS.MAKEMEHAPPY.WORKSHEET_3.URL',

            'WORKSHEETS.SNAP.TITLE', 'WORKSHEETS.SNAP.SUMMARY', 'WORKSHEETS.SNAP.DESCRIPTION',
            'WORKSHEETS.SNAP.WORKSHEET_1.DESCRIPTION', 'WORKSHEETS.SNAP.WORKSHEET_1.URL',
            'WORKSHEETS.SNAP.WORKSHEET_2.DESCRIPTION', 'WORKSHEETS.SNAP.WORKSHEET_2.URL', 'WORKSHEETS.SNAP.WORKSHEET_2.RESOURCES',

            'WORKSHEETS.CHAMELEON.TITLE', 'WORKSHEETS.CHAMELEON.SUMMARY', 'WORKSHEETS.CHAMELEON.DESCRIPTION',
            'WORKSHEETS.CHAMELEON.WORKSHEET_1.URL',

            'WORKSHEETS.MAILMANMAX.TITLE', 'WORKSHEETS.MAILMANMAX.SUMMARY', 'WORKSHEETS.MAILMANMAX.DESCRIPTION',
            'WORKSHEETS.MAILMANMAX.WORKSHEET_1.URL',

            'WORKSHEETS.CARORCUP.TITLE', 'WORKSHEETS.CARORCUP.SUMMARY', 'WORKSHEETS.CARORCUP.DESCRIPTION',
            'WORKSHEETS.CARORCUP.WORKSHEET_1.DESCRIPTION', 'WORKSHEETS.CARORCUP.WORKSHEET_1.URL',
            'WORKSHEETS.CARORCUP.WORKSHEET_2.DESCRIPTION', 'WORKSHEETS.CARORCUP.WORKSHEET_2.URL',

            'WORKSHEETS.FACELOCK.TITLE', 'WORKSHEETS.FACELOCK.SUMMARY', 'WORKSHEETS.FACELOCK.DESCRIPTION',
            'WORKSHEETS.FACELOCK.WORKSHEET_1.URL',

            'WORKSHEETS.JOURNEYTOSCHOOL.TITLE', 'WORKSHEETS.JOURNEYTOSCHOOL.SUMMARY', 'WORKSHEETS.JOURNEYTOSCHOOL.DESCRIPTION',
            'WORKSHEETS.JOURNEYTOSCHOOL.WORKSHEET_1.URL',

            'WORKSHEETS.SHYPANDA.TITLE', 'WORKSHEETS.SHYPANDA.SUMMARY', 'WORKSHEETS.SHYPANDA.DESCRIPTION',
            'WORKSHEETS.SHYPANDA.WORKSHEET_1.URL',

            'WORKSHEETS.ALIENLANGUAGE.TITLE', 'WORKSHEETS.ALIENLANGUAGE.SUMMARY', 'WORKSHEETS.ALIENLANGUAGE.DESCRIPTION',
            'WORKSHEETS.ALIENLANGUAGE.WORKSHEET_1.URL',

            'WORKSHEETS.SECRETCODE.TITLE', 'WORKSHEETS.SECRETCODE.SUMMARY', 'WORKSHEETS.SECRETCODE.DESCRIPTION',
            'WORKSHEETS.SECRETCODE.WORKSHEET_1.URL',

            'WORKSHEETS.VIRTUALPET.TITLE', 'WORKSHEETS.VIRTUALPET.SUMMARY', 'WORKSHEETS.VIRTUALPET.DESCRIPTION',
            'WORKSHEETS.VIRTUALPET.WORKSHEET_1.URL',

            'WORKSHEETS.PACMAN.TITLE', 'WORKSHEETS.PACMAN.SUMMARY', 'WORKSHEETS.PACMAN.DESCRIPTION',
            'WORKSHEETS.PACMAN.WORKSHEET_1.URL',

            'WORKSHEETS.CHATBOTS.TITLE', 'WORKSHEETS.CHATBOTS.SUMMARY', 'WORKSHEETS.CHATBOTS.DESCRIPTION',
            'WORKSHEETS.CHATBOTS.WORKSHEET_1.DESCRIPTION', 'WORKSHEETS.CHATBOTS.WORKSHEET_1.URL',
            'WORKSHEETS.CHATBOTS.WORKSHEET_2.DESCRIPTION', 'WORKSHEETS.CHATBOTS.WORKSHEET_2.URL',

            'WORKSHEETS.TOURISTINFO.TITLE', 'WORKSHEETS.TOURISTINFO.SUMMARY', 'WORKSHEETS.TOURISTINFO.DESCRIPTION',
            'WORKSHEETS.TOURISTINFO.WORKSHEET_1.URL',

            'WORKSHEETS.SORTINGHAT.TITLE', 'WORKSHEETS.SORTINGHAT.SUMMARY', 'WORKSHEETS.SORTINGHAT.DESCRIPTION',
            'WORKSHEETS.SORTINGHAT.WORKSHEET_1.DESCRIPTION', 'WORKSHEETS.SORTINGHAT.WORKSHEET_1.URL',
            'WORKSHEETS.SORTINGHAT.WORKSHEET_2.DESCRIPTION', 'WORKSHEETS.SORTINGHAT.WORKSHEET_2.URL',

            'WORKSHEETS.ROCKPAPERSCISSORS.TITLE', 'WORKSHEETS.ROCKPAPERSCISSORS.SUMMARY', 'WORKSHEETS.ROCKPAPERSCISSORS.DESCRIPTION',
            'WORKSHEETS.ROCKPAPERSCISSORS.WORKSHEET_1.URL',

            'WORKSHEETS.JUDGEABOOK.TITLE', 'WORKSHEETS.JUDGEABOOK.SUMMARY', 'WORKSHEETS.JUDGEABOOK.DESCRIPTION',
            'WORKSHEETS.JUDGEABOOK.WORKSHEET_1.DESCRIPTION', 'WORKSHEETS.JUDGEABOOK.WORKSHEET_1.URL',
            'WORKSHEETS.JUDGEABOOK.WORKSHEET_2.DESCRIPTION', 'WORKSHEETS.JUDGEABOOK.WORKSHEET_2.URL',

            'WORKSHEETS.LOCATELARRY.TITLE', 'WORKSHEETS.LOCATELARRY.SUMMARY', 'WORKSHEETS.LOCATELARRY.DESCRIPTION',
            'WORKSHEETS.LOCATELARRY.WORKSHEET_1.URL',

            'WORKSHEETS.CONFUSED.TITLE', 'WORKSHEETS.CONFUSED.SUMMARY', 'WORKSHEETS.CONFUSED.DESCRIPTION',
            'WORKSHEETS.CONFUSED.WORKSHEET_1.URL',

            'WORKSHEETS.SCHOOLLIBRARY.TITLE', 'WORKSHEETS.SCHOOLLIBRARY.SUMMARY', 'WORKSHEETS.SCHOOLLIBRARY.DESCRIPTION',
            'WORKSHEETS.SCHOOLLIBRARY.WORKSHEET_1.URL',

            'WORKSHEETS.WHATTWITTERTHINKS.TITLE', 'WORKSHEETS.WHATTWITTERTHINKS.SUMMARY', 'WORKSHEETS.WHATTWITTERTHINKS.DESCRIPTION',
            'WORKSHEETS.WHATTWITTERTHINKS.WORKSHEET_1.URL',

            'WORKSHEETS.NOUGHTSANDCROSSES.TITLE', 'WORKSHEETS.NOUGHTSANDCROSSES.SUMMARY', 'WORKSHEETS.NOUGHTSANDCROSSES.DESCRIPTION',
            'WORKSHEETS.NOUGHTSANDCROSSES.WORKSHEET_1.DESCRIPTION', 'WORKSHEETS.NOUGHTSANDCROSSES.WORKSHEET_1.URL',
            'WORKSHEETS.NOUGHTSANDCROSSES.WORKSHEET_2.DESCRIPTION', 'WORKSHEETS.NOUGHTSANDCROSSES.WORKSHEET_2.URL',
            'WORKSHEETS.NOUGHTSANDCROSSES.WORKSHEET_3.DESCRIPTION', 'WORKSHEETS.NOUGHTSANDCROSSES.WORKSHEET_3.URL',

            'WORKSHEETS.TOPTRUMPS.TITLE', 'WORKSHEETS.TOPTRUMPS.SUMMARY', 'WORKSHEETS.TOPTRUMPS.DESCRIPTION',
            'WORKSHEETS.TOPTRUMPS.WORKSHEET_1.URL',

            'WORKSHEETS.NEWSPAPERSHELVES.TITLE', 'WORKSHEETS.NEWSPAPERSHELVES.SUMMARY', 'WORKSHEETS.NEWSPAPERSHELVES.DESCRIPTION',
            'WORKSHEETS.NEWSPAPERSHELVES.WORKSHEET_1.URL',

            'WORKSHEETS.HEADLINETESTING.TITLE', 'WORKSHEETS.HEADLINETESTING.SUMMARY', 'WORKSHEETS.HEADLINETESTING.DESCRIPTION',
            'WORKSHEETS.HEADLINETESTING.WORKSHEET_1.URL',

            'WORKSHEETS.FINDIT.TITLE', 'WORKSHEETS.FINDIT.SUMMARY', 'WORKSHEETS.FINDIT.DESCRIPTION',
            'WORKSHEETS.FINDIT.WORKSHEET_1.URL',

            'WORKSHEETS.JARGONBUSTER.TITLE', 'WORKSHEETS.JARGONBUSTER.SUMMARY', 'WORKSHEETS.JARGONBUSTER.DESCRIPTION',
            'WORKSHEETS.JARGONBUSTER.WORKSHEET_1.URL',

            'WORKSHEETS.TITANIC.TITLE', 'WORKSHEETS.TITANIC.SUMMARY', 'WORKSHEETS.TITANIC.DESCRIPTION',
            'WORKSHEETS.TITANIC.WORKSHEET_1.URL'
        ]).then(function (translations) {
            vm.worksheets = [
                {
                    title : translations['WORKSHEETS.SMARTCLASSROOM.TITLE'],
                    summary : translations['WORKSHEETS.SMARTCLASSROOM.SUMMARY'],
                    description : translations['WORKSHEETS.SMARTCLASSROOM.DESCRIPTION'],
                    difficulty : 'Beginner',
                    type : 'text',
                    maketypes : [ 'scratch3' ],
                    image : 'static/images/project-smartclassroom.png',
                    tags : [ 'digital assistants', 'supervised learning' ],
                    teachersnotes : 'https://github.com/IBM/taxinomitis-docs/raw/master/teachers-notes/pdf/teachersnotes-smartclassroom.pdf',
                    downloads : [
                        {
                            description : translations['WORKSHEETS.SMARTCLASSROOM.WORKSHEET_1.DESCRIPTION'],
                            worksheet : translations['WORKSHEETS.SMARTCLASSROOM.WORKSHEET_1.URL']
                        },
                        {
                            description : translations['WORKSHEETS.SMARTCLASSROOM.WORKSHEET_2.DESCRIPTION'],
                            worksheet : translations['WORKSHEETS.SMARTCLASSROOM.WORKSHEET_2.URL']
                        },
                        {
                            description : translations['WORKSHEETS.SMARTCLASSROOM.WORKSHEET_3.DESCRIPTION'],
                            worksheet : translations['WORKSHEETS.SMARTCLASSROOM.WORKSHEET_3.URL']
                        }
                    ]
                },
                {
                    title : translations['WORKSHEETS.MAKEMEHAPPY.TITLE'],
                    summary : translations['WORKSHEETS.MAKEMEHAPPY.SUMMARY'],
                    description : translations['WORKSHEETS.MAKEMEHAPPY.DESCRIPTION'],
                    difficulty : 'Beginner',
                    type : 'text',
                    maketypes : [ 'scratch3', 'python' ],
                    image : 'static/images/project-makemehappy.png',
                    tags : [ 'sentiment analysis', 'supervised learning' ],
                    teachersnotes : 'https://github.com/IBM/taxinomitis-docs/raw/master/teachers-notes/pdf/teachersnotes-makemehappy.pdf',
                    downloads : [
                        {
                            description : translations['WORKSHEETS.MAKEMEHAPPY.WORKSHEET_1.DESCRIPTION'],
                            worksheet : translations['WORKSHEETS.MAKEMEHAPPY.WORKSHEET_1.URL']
                        },
                        {
                            description : translations['WORKSHEETS.MAKEMEHAPPY.WORKSHEET_2.DESCRIPTION'],
                            worksheet : translations['WORKSHEETS.MAKEMEHAPPY.WORKSHEET_2.URL']
                        },
                        {
                            description : translations['WORKSHEETS.MAKEMEHAPPY.WORKSHEET_3.DESCRIPTION'],
                            worksheet : translations['WORKSHEETS.MAKEMEHAPPY.WORKSHEET_3.URL']
                        }
                    ]
                },
                {
                    title : translations['WORKSHEETS.SNAP.TITLE'],
                    summary : translations['WORKSHEETS.SNAP.SUMMARY'],
                    description : translations['WORKSHEETS.SNAP.DESCRIPTION'],
                    difficulty : 'Beginner',
                    type : 'images',
                    maketypes : [ 'scratch2' ],
                    image : 'static/images/project-snap.png',
                    tags : [ 'image classification', 'supervised learning' ],
                    teachersnotes : 'https://github.com/IBM/taxinomitis-docs/raw/master/teachers-notes/pdf/teachersnotes-snap.pdf',
                    downloads : [
                        {
                            description : translations['WORKSHEETS.SNAP.WORKSHEET_1.DESCRIPTION'],
                            worksheet : translations['WORKSHEETS.SNAP.WORKSHEET_1.URL']
                        },
                        {
                            description : translations['WORKSHEETS.SNAP.WORKSHEET_2.DESCRIPTION'],
                            worksheet : translations['WORKSHEETS.SNAP.WORKSHEET_2.URL'],
                            resources : translations['WORKSHEETS.SNAP.WORKSHEET_2.RESOURCES']
                        }
                    ]
                },
                {
                    title : translations['WORKSHEETS.CHAMELEON.TITLE'],
                    summary : translations['WORKSHEETS.CHAMELEON.SUMMARY'],
                    description : translations['WORKSHEETS.CHAMELEON.DESCRIPTION'],
                    difficulty : 'Beginner',
                    type : 'images',
                    maketypes : [ 'scratch3' ],
                    image : 'static/images/project-chameleon.png',
                    tags : [ 'image classification', 'supervised learning' ],
                    teachersnotes : 'https://github.com/IBM/taxinomitis-docs/raw/master/teachers-notes/pdf/teachersnotes-chameleon.pdf',
                    downloads : [
                        {
                            worksheet : translations['WORKSHEETS.CHAMELEON.WORKSHEET_1.URL']
                        }
                    ]
                },
                {
                    title : translations['WORKSHEETS.TITANIC.TITLE'],
                    summary : translations['WORKSHEETS.TITANIC.SUMMARY'],
                    description : translations['WORKSHEETS.TITANIC.DESCRIPTION'],
                    difficulty : 'Beginner',
                    type : 'numbers',
                    maketypes : [ 'python' ],
                    image : 'static/images/project-titanic.png',
                    tags : [ 'predictive model', 'supervised learning' ],
                    teachersnotes : 'https://github.com/IBM/taxinomitis-docs/raw/master/teachers-notes/pdf/teachersnotes-titanic.pdf',
                    downloads : [
                        {
                            worksheet : translations['WORKSHEETS.TITANIC.WORKSHEET_1.URL']
                        }
                    ]
                },
                {
                    title : translations['WORKSHEETS.MAILMANMAX.TITLE'],
                    summary : translations['WORKSHEETS.MAILMANMAX.SUMMARY'],
                    description : translations['WORKSHEETS.MAILMANMAX.DESCRIPTION'],
                    difficulty : 'Beginner',
                    type : 'images',
                    maketypes : [ 'scratch3' ],
                    image : 'static/images/project-mailmanmax.png',
                    tags : [ 'optical character recognition', 'handwriting recognition', 'image classification' ],
                    teachersnotes : 'https://github.com/IBM/taxinomitis-docs/raw/master/teachers-notes/pdf/teachersnotes-mailmanmax.pdf',
                    downloads : [
                        {
                            worksheet : translations['WORKSHEETS.MAILMANMAX.WORKSHEET_1.URL']
                        }
                    ]
                },
                {
                    title : translations['WORKSHEETS.CARORCUP.TITLE'],
                    summary : translations['WORKSHEETS.CARORCUP.SUMMARY'],
                    description : translations['WORKSHEETS.CARORCUP.DESCRIPTION'],
                    difficulty : 'Beginner',
                    type : 'images',
                    maketypes : [ 'scratch3' ],
                    image : 'static/images/project-carorcup.png',
                    tags : [ 'image classification', 'supervised learning', 'crowd sourcing' ],
                    teachersnotes : 'https://github.com/IBM/taxinomitis-docs/raw/master/teachers-notes/pdf/teachersnotes-carorcup.pdf',
                    downloads : [
                        {
                            description : translations['WORKSHEETS.CARORCUP.WORKSHEET_1.DESCRIPTION'],
                            worksheet : translations['WORKSHEETS.CARORCUP.WORKSHEET_1.URL']
                        },
                        {
                            description : translations['WORKSHEETS.CARORCUP.WORKSHEET_2.DESCRIPTION'],
                            worksheet : translations['WORKSHEETS.CARORCUP.WORKSHEET_2.URL']
                        }
                    ]
                },
                {
                    title : translations['WORKSHEETS.FACELOCK.TITLE'],
                    summary : translations['WORKSHEETS.FACELOCK.SUMMARY'],
                    description : translations['WORKSHEETS.FACELOCK.DESCRIPTION'],
                    difficulty : 'Beginner',
                    type : 'images',
                    maketypes : [ 'scratch2' ],
                    image : 'static/images/project-facelock.png',
                    tags : [ 'facial recognition', 'biometrics', 'image classification', 'supervised learning' ],
                    teachersnotes : 'https://github.com/IBM/taxinomitis-docs/raw/master/teachers-notes/pdf/teachersnotes-facelock.pdf',
                    downloads : [
                        {
                            worksheet : translations['WORKSHEETS.FACELOCK.WORKSHEET_1.URL']
                        }
                    ]
                },
                {
                    title : translations['WORKSHEETS.JOURNEYTOSCHOOL.TITLE'],
                    summary : translations['WORKSHEETS.JOURNEYTOSCHOOL.SUMMARY'],
                    description : translations['WORKSHEETS.JOURNEYTOSCHOOL.DESCRIPTION'],
                    difficulty : 'Beginner',
                    type : 'numbers',
                    maketypes : [ 'scratch2' ],
                    image : 'static/images/project-journeytoschool.png',
                    tags : [ 'predictive model', 'testing and accuracy', 'supervised learning' ],
                    teachersnotes : 'https://github.com/IBM/taxinomitis-docs/raw/master/teachers-notes/pdf/teachersnotes-journeytoschool.pdf',
                    downloads : [
                        {
                            worksheet : translations['WORKSHEETS.JOURNEYTOSCHOOL.WORKSHEET_1.URL']
                        }
                    ]
                },
                {
                    title : translations['WORKSHEETS.SHYPANDA.TITLE'],
                    summary : translations['WORKSHEETS.SHYPANDA.SUMMARY'],
                    description : translations['WORKSHEETS.SHYPANDA.DESCRIPTION'],
                    difficulty : 'Beginner',
                    type : 'images',
                    maketypes : [ 'scratch3' ],
                    image : 'static/images/project-shypanda.png',
                    tags : [ 'image classification', 'supervised learning' ],
                    teachersnotes : 'https://github.com/IBM/taxinomitis-docs/raw/master/teachers-notes/pdf/teachersnotes-shypanda.pdf',
                    downloads : [
                        {
                            worksheet : translations['WORKSHEETS.SHYPANDA.WORKSHEET_1.URL']
                        }
                    ]
                },
                {
                    title : translations['WORKSHEETS.ALIENLANGUAGE.TITLE'],
                    summary : translations['WORKSHEETS.ALIENLANGUAGE.SUMMARY'],
                    description : translations['WORKSHEETS.ALIENLANGUAGE.DESCRIPTION'],
                    difficulty : 'Beginner',
                    type : 'sounds',
                    maketypes : [ 'scratch3' ],
                    image : 'static/images/project-alienlanguage.png',
                    tags : [ 'sound recognition', 'supervised learning' ],
                    teachersnotes : 'https://github.com/IBM/taxinomitis-docs/raw/master/teachers-notes/pdf/teachersnotes-alienlanguage.pdf',
                    downloads : [
                        {
                            worksheet : translations['WORKSHEETS.ALIENLANGUAGE.WORKSHEET_1.URL']
                        }
                    ]
                },
                {
                    title : translations['WORKSHEETS.PACMAN.TITLE'],
                    summary : translations['WORKSHEETS.PACMAN.SUMMARY'],
                    description : translations['WORKSHEETS.PACMAN.DESCRIPTION'],
                    difficulty : 'Intermediate',
                    type : 'numbers',
                    maketypes : [ 'scratch2' ],
                    image : 'static/images/project-pacman.png',
                    tags : [ 'decision tree learning' ],
                    teachersnotes : 'https://github.com/IBM/taxinomitis-docs/raw/master/teachers-notes/pdf/teachersnotes-pacman.pdf',
                    downloads : [
                        {
                            worksheet : translations['WORKSHEETS.PACMAN.WORKSHEET_1.URL']
                        }
                    ]
                },
                {
                    title : translations['WORKSHEETS.CHATBOTS.TITLE'],
                    summary : translations['WORKSHEETS.CHATBOTS.SUMMARY'],
                    description : translations['WORKSHEETS.CHATBOTS.DESCRIPTION'],
                    difficulty : 'Intermediate',
                    type : 'text',
                    maketypes : [ 'scratch3', 'python' ],
                    image : 'static/images/project-chatbots.png',
                    tags : [ 'sentiment analysis', 'supervised learning' ],
                    teachersnotes : 'https://github.com/IBM/taxinomitis-docs/raw/master/teachers-notes/pdf/teachersnotes-chatbots.pdf',
                    downloads : [
                        {
                            description : translations['WORKSHEETS.CHATBOTS.WORKSHEET_1.DESCRIPTION'],
                            worksheet : translations['WORKSHEETS.CHATBOTS.WORKSHEET_1.URL']
                        },
                        {
                            description : translations['WORKSHEETS.CHATBOTS.WORKSHEET_2.DESCRIPTION'],
                            worksheet : translations['WORKSHEETS.CHATBOTS.WORKSHEET_2.URL']
                        }
                    ]
                },
                {
                    title : translations['WORKSHEETS.VIRTUALPET.TITLE'],
                    summary : translations['WORKSHEETS.VIRTUALPET.SUMMARY'],
                    description : translations['WORKSHEETS.VIRTUALPET.DESCRIPTION'],
                    difficulty : 'Intermediate',
                    type : 'images',
                    maketypes : [ 'scratch3' ],
                    image : 'static/images/project-virtualpet.png',
                    tags : [ 'image classification', 'supervised learning' ],
                    teachersnotes : 'https://github.com/IBM/taxinomitis-docs/raw/master/teachers-notes/pdf/teachersnotes-virtualpet.pdf',
                    downloads : [
                        {
                            worksheet : translations['WORKSHEETS.VIRTUALPET.WORKSHEET_1.URL']
                        }
                    ]
                },
                {
                    title : translations['WORKSHEETS.TOURISTINFO.TITLE'],
                    summary : translations['WORKSHEETS.TOURISTINFO.SUMMARY'],
                    description : translations['WORKSHEETS.TOURISTINFO.DESCRIPTION'],
                    difficulty : 'Intermediate',
                    type : 'text',
                    maketypes : [ 'scratch3' ],
                    image : 'static/images/project-touristinfo.png',
                    tags : [ 'training bias', 'recommendations', 'supervised learning' ],
                    teachersnotes : 'https://github.com/IBM/taxinomitis-docs/raw/master/teachers-notes/pdf/teachersnotes-touristinfo.pdf',
                    downloads : [
                        {
                            worksheet : translations['WORKSHEETS.TOURISTINFO.WORKSHEET_1.URL']
                        }
                    ]
                },
                {
                    title : translations['WORKSHEETS.SECRETCODE.TITLE'],
                    summary : translations['WORKSHEETS.SECRETCODE.SUMMARY'],
                    description : translations['WORKSHEETS.SECRETCODE.DESCRIPTION'],
                    difficulty : 'Intermediate',
                    type : 'sounds',
                    maketypes : [ 'scratch3' ],
                    image : 'static/images/project-secretcode.png',
                    tags : [ 'speech recognition', 'sound recognition', 'supervised learning' ],
                    teachersnotes : 'https://github.com/IBM/taxinomitis-docs/raw/master/teachers-notes/pdf/teachersnotes-secretcode.pdf',
                    downloads : [
                        {
                            worksheet : translations['WORKSHEETS.SECRETCODE.WORKSHEET_1.URL']
                        }
                    ]
                },
                {
                    title : translations['WORKSHEETS.SORTINGHAT.TITLE'],
                    summary : translations['WORKSHEETS.SORTINGHAT.SUMMARY'],
                    description : translations['WORKSHEETS.SORTINGHAT.DESCRIPTION'],
                    difficulty : 'Intermediate',
                    type : 'text',
                    maketypes : [ 'scratch3' ],
                    image : 'static/images/project-sortinghat.png',
                    tags : [ 'text classification', 'supervised learning', 'crowd sourcing' ],
                    teachersnotes : 'https://github.com/IBM/taxinomitis-docs/raw/master/teachers-notes/pdf/teachersnotes-sortinghat.pdf',
                    downloads : [
                        {
                            description : translations['WORKSHEETS.SORTINGHAT.WORKSHEET_1.DESCRIPTION'],
                            worksheet : translations['WORKSHEETS.SORTINGHAT.WORKSHEET_1.URL']
                        },
                        {
                            description : translations['WORKSHEETS.SORTINGHAT.WORKSHEET_2.DESCRIPTION'],
                            worksheet : translations['WORKSHEETS.SORTINGHAT.WORKSHEET_2.URL']
                        }
                    ]
                },
                {
                    title : translations['WORKSHEETS.ROCKPAPERSCISSORS.TITLE'],
                    summary : translations['WORKSHEETS.ROCKPAPERSCISSORS.SUMMARY'],
                    description : translations['WORKSHEETS.ROCKPAPERSCISSORS.DESCRIPTION'],
                    difficulty : 'Intermediate',
                    type : 'images',
                    maketypes : [ 'scratch3' ],
                    image : 'static/images/project-rockpaperscissors.png',
                    tags : [ 'image classification', 'supervised learning' ],
                    teachersnotes : 'https://github.com/IBM/taxinomitis-docs/raw/master/teachers-notes/pdf/teachersnotes-rockpaperscissors.pdf',
                    downloads : [
                        {
                            worksheet : translations['WORKSHEETS.ROCKPAPERSCISSORS.WORKSHEET_1.URL']
                        }
                    ]
                },
                {
                    title : translations['WORKSHEETS.NEWSPAPERSHELVES.TITLE'],
                    summary : translations['WORKSHEETS.NEWSPAPERSHELVES.SUMMARY'],
                    description : translations['WORKSHEETS.NEWSPAPERSHELVES.DESCRIPTION'],
                    difficulty : 'Intermediate',
                    type : 'text',
                    maketypes : [ 'scratch3' ],
                    image : 'static/images/project-headlines-easy.png',
                    tags : [ 'text classification', 'supervised learning' ],
                    teachersnotes : 'https://github.com/IBM/taxinomitis-docs/raw/master/teachers-notes/pdf/teachersnotes-headlines-easy.pdf',
                    downloads : [
                        {
                            worksheet : translations['WORKSHEETS.NEWSPAPERSHELVES.WORKSHEET_1.URL']
                        }
                    ]
                },
                {
                    title : translations['WORKSHEETS.JUDGEABOOK.TITLE'],
                    summary : translations['WORKSHEETS.JUDGEABOOK.SUMMARY'],
                    description : translations['WORKSHEETS.JUDGEABOOK.DESCRIPTION'],
                    difficulty : 'Intermediate',
                    type : 'images',
                    maketypes : [ 'scratch3' ],
                    image : 'static/images/project-judgeabook.png',
                    tags : [ 'image classification', 'supervised learning' ],
                    teachersnotes : 'https://github.com/IBM/taxinomitis-docs/raw/master/teachers-notes/pdf/teachersnotes-judgeabook.pdf',
                    downloads : [
                        {
                            description : translations['WORKSHEETS.JUDGEABOOK.WORKSHEET_1.DESCRIPTION'],
                            worksheet : translations['WORKSHEETS.JUDGEABOOK.WORKSHEET_1.URL']
                        },
                        {
                            description : translations['WORKSHEETS.JUDGEABOOK.WORKSHEET_2.DESCRIPTION'],
                            worksheet : translations['WORKSHEETS.JUDGEABOOK.WORKSHEET_2.URL']
                        }
                    ]
                },
                {
                    title : translations['WORKSHEETS.LOCATELARRY.TITLE'],
                    summary : translations['WORKSHEETS.LOCATELARRY.SUMMARY'],
                    description : translations['WORKSHEETS.LOCATELARRY.DESCRIPTION'],
                    difficulty : 'Intermediate',
                    type : 'images',
                    maketypes : [ 'scratch3' ],
                    image : 'static/images/project-locatelarry.png',
                    tags : [ 'image classification', 'supervised learning', 'image pre-processing' ],
                    teachersnotes : 'https://github.com/IBM/taxinomitis-docs/raw/master/teachers-notes/pdf/teachersnotes-locatelarry.pdf',
                    downloads : [
                        {
                            worksheet : translations['WORKSHEETS.LOCATELARRY.WORKSHEET_1.URL']
                        }
                    ]
                },
                {
                    title : translations['WORKSHEETS.CONFUSED.TITLE'],
                    summary : translations['WORKSHEETS.CONFUSED.SUMMARY'],
                    description : translations['WORKSHEETS.CONFUSED.DESCRIPTION'],
                    difficulty : 'Intermediate',
                    type : 'images',
                    maketypes : [ 'scratch3' ],
                    image : 'static/images/project-confused.png',
                    tags : [ 'image classification', 'supervised learning', 'overfitting' ],
                    teachersnotes : 'https://github.com/IBM/taxinomitis-docs/raw/master/teachers-notes/pdf/teachersnotes-confused.pdf',
                    downloads : [
                        {
                            worksheet : translations['WORKSHEETS.CONFUSED.WORKSHEET_1.URL']
                        }
                    ]
                },
                {
                    title : translations['WORKSHEETS.SCHOOLLIBRARY.TITLE'],
                    summary : translations['WORKSHEETS.SCHOOLLIBRARY.SUMMARY'],
                    description : translations['WORKSHEETS.SCHOOLLIBRARY.DESCRIPTION'],
                    difficulty : 'Intermediate',
                    type : 'numbers',
                    maketypes : [ 'scratch2' ],
                    image : 'static/images/project-schoollibrary.png',
                    tags : [ 'predictive model', 'recommendations', 'supervised learning' ],
                    teachersnotes : 'https://github.com/IBM/taxinomitis-docs/raw/master/teachers-notes/pdf/teachersnotes-schoollibrary.pdf',
                    downloads : [
                        {
                            worksheet : translations['WORKSHEETS.SCHOOLLIBRARY.WORKSHEET_1.URL']
                        }
                    ]
                },
                {
                    title : translations['WORKSHEETS.JARGONBUSTER.TITLE'],
                    summary : translations['WORKSHEETS.JARGONBUSTER.SUMMARY'],
                    description : translations['WORKSHEETS.JARGONBUSTER.DESCRIPTION'],
                    difficulty : 'Intermediate',
                    type : 'sounds',
                    maketypes : [ 'scratch3' ],
                    image : 'static/images/project-jargonbuster.png',
                    tags : [ 'speech recognition', 'sound recognition', 'supervised learning' ],
                    teachersnotes : 'https://github.com/IBM/taxinomitis-docs/raw/master/teachers-notes/pdf/teachersnotes-jargonbuster.pdf',
                    downloads : [
                        {
                            worksheet : translations['WORKSHEETS.JARGONBUSTER.WORKSHEET_1.URL']
                        }
                    ]
                },
                {
                    title : translations['WORKSHEETS.WHATTWITTERTHINKS.TITLE'],
                    summary : translations['WORKSHEETS.WHATTWITTERTHINKS.SUMMARY'],
                    description : translations['WORKSHEETS.WHATTWITTERTHINKS.DESCRIPTION'],
                    difficulty : 'Advanced',
                    type : 'text',
                    maketypes : [ 'scratch3' ],
                    image : 'static/images/project-whattwitterthinks.png',
                    tags : [ 'sentiment analysis', 'social media analysis', 'supervised learning' ],
                    teachersnotes : 'https://github.com/IBM/taxinomitis-docs/raw/master/teachers-notes/pdf/teachersnotes-whattwitterthinks.pdf',
                    downloads : [
                        {
                            worksheet : translations['WORKSHEETS.WHATTWITTERTHINKS.WORKSHEET_1.URL']
                        }
                    ]
                },
                {
                    title : translations['WORKSHEETS.NOUGHTSANDCROSSES.TITLE'],
                    summary : translations['WORKSHEETS.NOUGHTSANDCROSSES.SUMMARY'],
                    description : translations['WORKSHEETS.NOUGHTSANDCROSSES.DESCRIPTION'],
                    difficulty : 'Advanced',
                    type : 'numbers',
                    maketypes : [ 'scratch2', 'python' ],
                    image : 'static/images/project-noughtsandcrosses.png',
                    tags : [ 'decision tree learning', 'reinforcement learning', 'categorical data' ],
                    teachersnotes : 'https://github.com/IBM/taxinomitis-docs/raw/master/teachers-notes/pdf/teachersnotes-noughtsandcrosses.pdf',
                    downloads : [
                        {
                            description : translations['WORKSHEETS.NOUGHTSANDCROSSES.WORKSHEET_1.DESCRIPTION'],
                            worksheet : translations['WORKSHEETS.NOUGHTSANDCROSSES.WORKSHEET_1.URL']
                        },
                        {
                            description : translations['WORKSHEETS.NOUGHTSANDCROSSES.WORKSHEET_2.DESCRIPTION'],
                            worksheet : translations['WORKSHEETS.NOUGHTSANDCROSSES.WORKSHEET_2.URL']
                        },
                        {
                            description : translations['WORKSHEETS.NOUGHTSANDCROSSES.WORKSHEET_3.DESCRIPTION'],
                            worksheet : translations['WORKSHEETS.NOUGHTSANDCROSSES.WORKSHEET_3.URL']
                        }
                    ]
                },
                {
                    title : translations['WORKSHEETS.TOPTRUMPS.TITLE'],
                    summary : translations['WORKSHEETS.TOPTRUMPS.SUMMARY'],
                    description : translations['WORKSHEETS.TOPTRUMPS.DESCRIPTION'],
                    difficulty : 'Advanced',
                    type : 'numbers',
                    maketypes : [ 'scratch2' ],
                    image : 'static/images/project-toptrumps.png',
                    tags : [ 'decision tree learning', 'reinforcement learning', 'categorical data' ],
                    teachersnotes : 'https://github.com/IBM/taxinomitis-docs/raw/master/teachers-notes/pdf/teachersnotes-toptrumps.pdf',
                    downloads : [
                        {
                            worksheet : translations['WORKSHEETS.TOPTRUMPS.WORKSHEET_1.URL']
                        }
                    ]
                },
                {
                    title : translations['WORKSHEETS.HEADLINETESTING.TITLE'],
                    summary : translations['WORKSHEETS.HEADLINETESTING.SUMMARY'],
                    description : translations['WORKSHEETS.HEADLINETESTING.DESCRIPTION'],
                    difficulty : 'Advanced',
                    type : 'text',
                    maketypes : [ 'scratch3' ],
                    image : 'static/images/project-headlines.png',
                    tags : [ 'text classification', 'supervised learning', 'testing' ],
                    teachersnotes : 'https://github.com/IBM/taxinomitis-docs/raw/master/teachers-notes/pdf/teachersnotes-headlines.pdf',
                    downloads : [
                        {
                            worksheet : translations['WORKSHEETS.HEADLINETESTING.WORKSHEET_1.URL']
                        }
                    ]
                },
                {
                    title : translations['WORKSHEETS.FINDIT.TITLE'],
                    summary : translations['WORKSHEETS.FINDIT.SUMMARY'],
                    description : translations['WORKSHEETS.FINDIT.DESCRIPTION'],
                    difficulty : 'Advanced',
                    type : 'images',
                    maketypes : [ 'appinventor' ],
                    image : 'static/images/project-findit.png',
                    tags : [ 'image classification', 'supervised learning' ],
                    teachersnotes : 'https://github.com/IBM/taxinomitis-docs/raw/master/teachers-notes/pdf/teachersnotes-findit.pdf',
                    downloads : [
                        {
                            worksheet : translations['WORKSHEETS.FINDIT.WORKSHEET_1.URL']
                        }
                    ]
                }
            ];
        });

        vm.downloadWorksheet = function (ev, worksheet) {
            $mdDialog.show({
                locals : {
                    worksheet : worksheet
                },
                controller : function ($scope, locals) {
                    $scope.worksheet = locals.worksheet;
                    $scope.hide = function() {
                        $mdDialog.hide();
                    };
                    $scope.cancel = function() {
                        $mdDialog.cancel();
                    };
                },
                templateUrl : 'static/components-' + $stateParams.VERSION + '/worksheets/download.tmpl.html',
                targetEvent : ev,
                clickOutsideToClose : true
            });
        };


        $scope.projecttype = 'ALL';
        $scope.projectdifficulty = 'ALL';
        $scope.projectmaketype = 'ALL';

        $scope.filterWorksheets = function (item) {
            var match = true;

            if (($scope.projecttype !== 'ALL') && match) {
                match = (item.type === $scope.projecttype);
            }
            if (($scope.projectdifficulty !== 'ALL') && match) {
                match = (item.difficulty === $scope.projectdifficulty);
            }
            if (($scope.projectmaketype !== 'ALL') && match) {
                match = (($scope.projectmaketype === 'python' && item.maketypes.indexOf('python') >= 0) ||
                         ($scope.projectmaketype === 'appinventor' && item.maketypes.indexOf('appinventor') >= 0) ||
                         (($scope.projectmaketype === 'scratch') && (item.maketypes.indexOf('scratch2') >= 0 ||
                                                                     item.maketypes.indexOf('scratch3') >= 0)));
            }
            return match;
        };

    }
}());
