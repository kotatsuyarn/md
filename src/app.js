import routes from './routes.js'

const root = document.body
// root.style["margin"] = "0"
root.style["height"] = "100vh"
// root.style["overflow"] = "hidden"

m.route(root, "/", routes)

/*
    Todo:
    # my list
    -   shows marked as read or currently reading mangas
    -   searching for titles possible
    # favorites
    -   shows the favorite mangas
    -   searching for titles possible
    # downloads
    -   shows the downloaded mangas
    -   offline read possible
    -   searching for titles possible
    # history
    -   shows searched mangas
    -   searching for titles possible
    # download a whole manga with all chapters or a single chapter
    -   while downloading the app shouldnt be freezed,
        the user should still be possible to read other mangas
    # searching a manga
    -   through id -> mangadex api
    -   through title -> google search?
    # what to do when mangadex isnt reachable?
    -   cant show images of chapter
    -   cant get a manga
    # show chapter language in chapter list
    # button search moves the button random on loading down
    # show other covers of the manga?
    # A download queue
    # navigating with arrow keys in chapterreader
    # going from reading chapter back to searching, keep the last searched chapter in there? 
    # if it couldnt find a manga with the given id
    # at start of app, notify if there are new chapters on the currently reading marked mangas
    # right panel contains
    -   download queue
    -   history (last 500 actions of the user)
        -   actions: searching a manga, reading a chapter, downloading a manga / chapter
    # put SearchMangaInput into the NavPanel? With a search icon and random (dice) icon instead of buttons
    -   Searching at key 'enter' should also be possible
    # get chapters paginated
    # twitter news
*/