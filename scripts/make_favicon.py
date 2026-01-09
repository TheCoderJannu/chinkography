from PIL import Image
import os

root = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
src = os.path.join(root, 'public', 'favicon.png')
dst = os.path.join(root, 'public', 'favicon.ico')

if not os.path.exists(src):
    raise SystemExit(f"Source not found: {src}")

img = Image.open(src).convert('RGBA')
# common favicon sizes
sizes = [(16,16),(32,32),(48,48),(64,64),(128,128),(256,256)]
img.save(dst, format='ICO', sizes=sizes)
print('Saved', dst)
