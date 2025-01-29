# workshop-4
emoji
## URL
https://clementine0507.github.io/workshop-4/
### Notes
<img width="1483" alt="a10cd4a4fa61f4414309d93c736c8e1d_" src="https://github.com/user-attachments/assets/9f512949-f3f1-4043-9b46-cf5bb140c04a" />

Random emoji generation

<img width="1920" alt="b7b0ba0da045f4cf2944b87f97790b44_" src="https://github.com/user-attachments/assets/40b2ae0d-0d1c-4bc9-89de-89ad5191407d" />

Generate random emoji based on mouse position after user's left mouse button.

<img width="1595" alt="e81a0ad80a2947e5bc757a9f5e7d5917_" src="https://github.com/user-attachments/assets/b5cb133a-53a1-4e93-9873-81aa1a4fd39a" />

<img width="1540" alt="43b16c5053bb9a9883331b64d65921f2_" src="https://github.com/user-attachments/assets/63208839-5321-4c59-a271-d5bb90be25b0" />

create button click to generate emoji with random coordinates

<img width="1535" alt="bac54be51ac0855da39a54527d47e6a8_" src="https://github.com/user-attachments/assets/fdb3e18a-1fb4-47b0-8139-0ddea557e6d3" />

checkbox

<img width="1386" alt="dfe046fb450a02801688ec48f03e62bc_" src="https://github.com/user-attachments/assets/3a57ee8f-4f39-4e30-a0e3-3a485f0b8452" />

options

<img width="1349" alt="eaaa53401134c8a82cbfb52367aaf1b6_" src="https://github.com/user-attachments/assets/a1d811c0-391b-438f-8bc1-d3e992145526" />

![3c4e77bea17d20e8ba3f87e968b6bcfc_](https://github.com/user-attachments/assets/00ddcce6-c1f6-4ace-bb11-4cb2cdb11667)

textbox

#### Notes

In the video of workshop, both jpg and png files can be successfully imported as long as the correct file extension is specified in `loadImage`. Based on this logic, I tried importing several gif images, which should theoretically work as well.

example 1.0

![bd26feb8bfa5e827e74a86b7e6ef375c_](https://github.com/user-attachments/assets/99b5e2b3-535c-41ed-b988-ed4bde09dab6)

<img width="1920" alt="16c9783ac024d14054d6df0224135980_" src="https://github.com/user-attachments/assets/6fea509a-249a-4b7e-9022-39aa1e3e58e9" />

2.0 Adjustable transparency

let emojis = [];

    let e1, e2, e3, e4;
    
    let slider;
    
    let checkbox;
    

    function preload() {
    
      e1 = loadImage('gif/m1.GIF');
      
      e2 = loadImage('gif/m2.gif');
      
      e3 = loadImage('gif/m3.gif');
      
      e4 = loadImage('gif/m4.gif');
      
    }


    function setup() {
    
      createCanvas(windowWidth, windowHeight);
      
      background(225);
      
      emojis.push(e1);
      
      emojis.push(e2);
      
      emojis.push(e3);
      
      emojis.push(e4);
      
      let button = createButton('click here');
      
      button.position(10, 10);
      
      button.mousePressed(() => {
      
        let r = random(emojis);
        
        r.x = random(width);
        
        r.y = random(height);
        
        image(r, r.x, r.y);
        
      }
      
      slider = createSlider(0, 255, 255);
      
      slider.position(100, 350);
      
      slider.size(200);
      
      checkbox = createCheckbox();
      
      checkbox.position(200, 150);
      
    }


    function draw() {
    
      if (checkbox.checked()) {
      
        background(0);
        
      } else {
      
        background(225);
        
      }
      
      let alphaValue = slider.value();
      
      for (let i = 0; i < emojis.length; i++) {
      
        if (emojis[i].x!== undefined && emojis[i].y!== undefined) {
        
          tint(255, alphaValue);
          
          image(emojis[i], emojis[i].x, emojis[i].y);
          
        }
        
      }
      
    }


3.0 add a checkbox



let emojis = [];



    let e1, e2, e3, e4;

    
    
    let slider;

    
    
    let checkbox;





    function preload() {

    
    
      e1 = loadImage('gif/m1.GIF');

      
      
      e2 = loadImage('gif/m2.gif');

      
      
      e3 = loadImage('gif/m3.gif');

      
      
      e4 = loadImage('gif/m4.gif');
    
    }

    


    function setup() {
    
    
      createCanvas(windowWidth, windowHeight);

      
      background(225);

      
      emojis.push(e1);

      
      emojis.push(e2);

      
      emojis.push(e3);

      
      emojis.push(e4);

      
      let button = createButton('click here');

      
      button.position(10, 10);

      
      button.mousePressed(() => {

      
        let r = random(emojis);

        
        r.x = random(width);

        
        r.y = random(height);

        
        image(r, r.x, r.y);

      
      }

      
      
      slider = createSlider(0, 255, 255);

      
      slider.position(100, 350);

      
      slider.size(200);

      
      checkbox = createCheckbox();

      
      checkbox.position(200, 150);

    
    }



    function draw() {
    

      if (checkbox.checked()) {

      
        background(0);

      
      } else {

    
       background(225);

      
      }

      
      let alphaValue = slider.value();
      
      
      for (let i = 0; i < emojis.length; i++) {
      
      
        if (emojis[i].x!== undefined && emojis[i].y!== undefined) {
        
        
          tint(255, alphaValue);
          
          
          image(emojis[i], emojis[i].x, emojis[i].y);
      
        }  
      
      }
    
    }

Additional work

![image](https://github.com/user-attachments/assets/a81da01b-361d-4080-9cd5-684149afaf54)

I submited the folder, the name is "workshop4-1".
