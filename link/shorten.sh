#!/bin/bash

if [ $# -eq 0 ]; then
    >&2 echo "No link provided"
    exit 1
fi

URL=$1

if [ $# -eq 2 ]; then
    FOLDER=$2
else
    FOLDER=$(find "$SHORTLINK_PATH" -type d | wc -l)
fi

SHORTLINK_PATH="/home/zi/dev/website/link"
mkdir -p "$SHORTLINK_PATH/$FOLDER/"
cat >> "$SHORTLINK_PATH/$FOLDER/index.html"<< EOF
<!DOCTYPE HTML>
<html lang="en-US">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="refresh" content="0; url=$URL">
    <script type="text/javascript">
        window.location.href = "$URL"
    </script>
    <title>Shortlink via zi9.dev</title>
</head>

<body>
    If you are not redirected automatically, follow this <a href='$URL'>link</a>.
</body>

</html>
EOF

git add "$SHORTLINK_PATH/$FOLDER/"
git commit -m "Added short link $FOLDER"
git push

echo "===================="
echo ""
echo "Short link created! -> https://zi9.dev/link/$FOLDER"