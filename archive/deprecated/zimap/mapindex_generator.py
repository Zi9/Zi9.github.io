from os import listdir
from datetime import datetime

SRC_DIR = "maps_src"
DEST_FILE = "maps/index.html"

TEMPL_START = f"""<!DOCTYPE html>
<html lang="en">

<head>
    <title>Maps for Zi9's Map Loader</title>
    <meta charset="utf-8" />
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@200;300;500&display=swap" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="../style.css" />
</head>

<body>
    <p class="underconstruction">THIS PAGE IS UNDER CONSTRUCTION</p>
    <h2 class="pagetitle">Maps for Zi9's Map Loader</h2>
    <p class="updatetime">Last updated on {datetime.now().strftime("%Y/%m/%d %H:%M:%S")}
    <div class="maps">
"""

TEMPL_END = """    </div>
</body>

</html>"""


class Map:
    def __init__(self, file):
        with open(file, "r") as inFile:
            self.name = inFile.readline().split(": ")[1].strip()
            self.author = inFile.readline().split(": ")[1].strip()
            self.size = inFile.readline().split(": ")[1].strip()
            self.dl = inFile.readline().split(": ")[1].strip()
            self.mapID = inFile.readline().split(": ")[1].strip()
            self.description = inFile.readline().split(": ")[1].strip()

    def write_html(self, fileHandle):
        fileHandle.write(
            f"""
        <div class="card map-card">
            <div class="map-textblock">
                <div class="map-titlebox">
                    <h2 class="map-title" id="{self.mapID}">{self.name}</h2>
                    <div class="map-download">
                        <a class="map-download-content" href="{self.dl}">
                            <h1 class="map-download-icon">⇓</h1>
                            <p class="map-download-text">Download</p>
                        </a>
                    </div>
                </div>
                <hr>
                <div class="map-description">
                    <p><b>Author : </b>{self.author}</p>
                    <p><b>Size : </b>{self.size}</p>
                    <p><b>MapID : </b>{self.mapID}</p>
                    <p>{self.description}</p>
                </div>
            </div>
            <div class="map-coverblock">
                <img class="map-cover" src="map-covers/{self.mapID}.png">
            </div>
        </div>
"""
        )


MAPS = []

for file in listdir(SRC_DIR):
    MAPS.append(Map("maps_src/" + file))

with open(DEST_FILE, "w") as f:
    f.write(TEMPL_START)
    for item in MAPS:
        item.write_html(f)
    f.write(TEMPL_END)
