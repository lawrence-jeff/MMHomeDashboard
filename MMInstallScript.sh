sudo apt install -y git
sudo apt install -y curl
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt install -y nodejs
git clone https://github.com/MichMich/MagicMirror
cd MagicMirror/
npm install

//Install Modules
cd modules
git clone https://github.com/Jopyth/MMM-Remote-Control.git
cd MMM-Remote-Control
npm install
cd ..
git clone https://github.com/shbatm/MMM-Carousel
git clone https://github.com/jc21/MMM-Sounds.git
cd MMM-Sounds && npm install
cd ..
git clone --depth=1 https://github.com/eouia/MMM-CalendarExt2
cd MMM-CalendarExt2
npm install
git clone https://github.com/lawrence-jeff/MMM-OClock
git clone https://github.com/cbrooker/MMM-Todoist.git
cd MMM-Todoist
npm install
cd ..
git clone https://github.com/ianperrin/MMM-ModuleScheduler.git
cd MMM-ModuleScheduler
npm install --production
cd ..
git clone https://github.com/shbatm/MMM-KeyBindings
