#!/usr/bin/env python
# -*- coding: utf-8 -*- #

import datetime

PLUGIN_PATHS = ['./plugins']
PLUGINS = ['read_more']
READ_MORE_LINK = '<span>Read More</span>'

SITENAME = "Zi9's Computer Adventures"
SITESUBTITLE = "Random posts of stuff I do"
SITEURL = "https://zi9.github.io"
PATH = "content"
TIMEZONE = "Europe/Tallinn"
LOCALE = "en_US.UTF8"
DEFAULT_LANG = "en"
DEFAULT_DATE_FORMAT = "%d/%m/%Y"
BUILD_TIME = datetime.datetime.now().strftime("%H:%M:%S %d/%m/%Y")
STATIC_PATHS = ["static", "images"]
EXTRA_PATH_METADATA = {"static/favicon.ico": {"path": "favicon.ico"}}
DISPLAY_CATEGORIES_ON_MENU = False
DISPLAY_PAGES_ON_MENU = False
MENUITEMS = [
    ("Home", "/home"),
    ("Projects", [
        ("Proj1", "/proj1"),
        ("Proj2", "/proj2"),
        ("Proj3", "/proj3")
    ]),
    ("All Posts", "/archives")
]
ARTICLE_URL = "posts/{category}/{slug}/"
ARTICLE_SAVE_AS = "posts/{category}/{slug}/index.html"
PAGE_URL = "{slug}/"
PAGE_SAVE_AS = "{slug}/index.html"
ARCHIVES_SAVE_AS = "archives/index.html"
AUTHOR_SAVE_AS = ""
AUTHORS_SAVE_AS = ""
TAG_SAVE_AS = ""
TAGS_SAVE_AS = ""
CATEGORY_SAVE_AS = ""
CATEGORIES_SAVE_AS = ""
THEME = "theme"
SUMMARY_MAX_LENGTH = 300
SUMMARY_END_SUFFIX = "... "

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None


DEFAULT_PAGINATION = 5

# Uncomment following line if you want document-relative URLs when developing
# RELATIVE_URLS = True
