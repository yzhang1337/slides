---
marp: true
theme: default
paginate: true
size: 16:9
header: '7/27/23'
footer: 'slides.yilunzhang.com'
---
<!--backgroundColor: #15202B -->
<!--color: #FFFFFF -->
# Using Computer Vision in the Assessment of Neurosurgical Skill


![bg right](https://imgc.allpostersimages.com/img/posters/damn-it-i-m-a-brain-surgeon-not-a-rocket-scientist-new-yorker-cartoon_u-L-PGPNYV0.jpg?artPerspective=n)

---

# Introduction to Computer Vision
---

![bg right](https://miro.medium.com/v2/resize:fit:1000/1*NLnnf_M4Nlm4p1GAWrWUCQ.gif)
From wikipedia...
>*Computer vision tasks include methods for acquiring, processing, analyzing and understanding digital images, and extraction of high-dimensional data from the real world in order to produce numerical or symbolic information, e.g. in the forms of decisions.*


---
![](https://cs231n.github.io/assets/nn1/neuron_model.jpeg)

```python
class Neuron(object):
  # ... 
  def forward(self, inputs):
    """ assume inputs and weights are 1-D numpy arrays and bias is a number """
    cell_body_sum = np.sum(inputs * self.weights) + self.bias
    firing_rate = 1.0 / (1.0 + math.exp(-cell_body_sum)) # sigmoid activation function
    return firing_rate
```
---

![bg fit](https://miro.medium.com/v2/resize:fit:616/1*Uhr-4VDJD0-gnteUNFzZTw.jpeg)

---

![](https://d1m75rqqgidzqn.cloudfront.net/2019/10/shutterstock_1343545793.jpg)

![bg right](https://miro.medium.com/v2/resize:fit:1000/1*NLnnf_M4Nlm4p1GAWrWUCQ.gif)

---

![](https://share.cleanshot.com/7ljNm3Hrhq1l6HKv6Zfg+)

![bg right fit](https://share.cleanshot.com/fPJ52hrPzQbm3KmywZ9Y+)

---
<!--- _header: '' --->
<!--- _footer: '' --->
# Surgical Skill assessment


![](https://share.cleanshot.com/HHRKqtnlL5CR0nDcNVXD+)

---

# So why does this matter?
![](https://share.cleanshot.com/tsb5THPBy02XPsx5fYRv+)

---
# Assuming we have perfect Computer Vision models*
* Assessment of Trainees and increased real-time and longitudinal feedback for accelerated learning
* Defining **Good** surgical technique, behaviors, flow
* Spatiotemporally model the **Good** surgical technique in 3D using hands/instruments
* Translate to Robotics and/or increasingly *Minimally Invasive techniques*
* Feed robotic systems stereotactic techniques and real-time intraoperative imaging 
* Auto-pilot? :rocket:

---

# Computer Vision's Achilles Heel?

* Data
* Labels
* Compute

![bg fit right](https://www.imperial.ac.uk/ImageCropToolT4/imageTool/uploaded-images/visionblender-example-results-of-some-generated-ground-truth-map_1601999412678_x2.jpg?r=1646)


---

# Current Applications in Neurosurgery

---
<!--- _header: '' --->

# Surgical Flow

![](https://share.cleanshot.com/cgnjMp2pCdFh5jl3SfhP+)



---
![](https://share.cleanshot.com/zfQjTnBX5f413XVWZm9X+)

![bg right fit](https://share.cleanshot.com/9yxlSJRQrvLhwZK4p0r2+)

---
![](https://share.cleanshot.com/GzHxB5L86stqjpdtJX01+)

![bg right fit](https://share.cleanshot.com/yhChNgdHb0CxlV09qDF0+)

---


![](https://share.cleanshot.com/0s68sxv8xbL6QG0PCdSG+)

![](https://share.cleanshot.com/prPS7Nnn4klVy75XF7TN+)


---

# Surgical Flow :white_check_mark:
# Intra-operative guidance

---
![bg fit](https://share.cleanshot.com/1WP8F2hXp3dmXtSVkN07+)

---

![bg fit](https://share.cleanshot.com/4rKtrRGHwNMYQ4SsjwvL+)

---

![bg fit](https://share.cleanshot.com/Vr86mgtzMc3DNHFqsr1S+)

---

# Surgical Flow :white_check_mark:
# Intra-operative guidance :white_check_mark:
# Surgical Skill Assessment 

---

![bg fit](https://share.cleanshot.com/dRW2w09WTdVj9Jf0yQbt+)

---

![bg fit](https://share.cleanshot.com/tF7N9qLWP4PRPGWSwKdF+)

---

![bg fit](https://share.cleanshot.com/WNhHXgL4F8ynf9R8J66g+)

---

![](https://share.cleanshot.com/5kh7gDw2pPjD46PVQM94+)

---

![](https://share.cleanshot.com/87Qs7z8C20GtQlTr6bRt+)

---

![](https://share.cleanshot.com/FsbXCT76bJZ8MHlc48yl+)

---

![](https://share.cleanshot.com/hBzkdlFPncywpH6vwRQ0+)

---
# Surgical Flow :white_check_mark:
# Intra-operative guidance :white_check_mark:
# Surgical Skill Assessment :white_check_mark:
# Coming to an OR near you ... :fast_forward:
---
# Conclusion

- AI is coming for all of our jobs
- Software > Hardware
- Importance of clinicians to drive, validate and practice good *A.I. Stewardship*

---
# Future directions...

### Things that we have done...

* Recorded 250 open surgical cases at BIDMC from colorectal to plastics
* At least 2 cohorts of general surgery residents at BIDMC undergoing longitudinal skill tracking from PGY-1 to PGY-N
* Recorded 17 open surgical cases here at TMC (and counting...)
* Piloted bowel anastamosis resident skill assessment with the general surgery residents at Lahey

---
# Future directions...

### Things that we are doing ...
* Recording more cases at BIDMC and TMC... and hopefully Lahey soon! 
* Using *surgical signatures* and NLP to build the largest, annotated, open source surgical video database for research and academic purposes 
* Continuously iterating on CV model improvement w/ Stanford Computer Science
* Pilotting medical student suturing/tying application with Harvard Medical Students

---
# Future directions...
### Potential interesting things to do ...

* GPS-like turn by turn intra-operative guidance
* Distinguishing surgical **style** versus **technique** within/across surgeons
* Automatic operative note generation
* and more...! 


---

# Thank You

- Any questions?
- slides available online

![bg right 80%](https://www.tuftsmedicalcenter.org/-/media/Images/Physicians/Bugaev_Nikolay.ashx)
![bg right 80%](https://www.tuftsmedicalcenter.org/-/media/Images/Content/TuftsMC/Departments-and-Services/Surgery/Residents/richard_caroline.ashx?h=100&w=90&la=en&hash=49D827B14D082045B1C8271A7FBD636C40098673)




---
# RECYCLING BIN
---
# INSTRUMENT BASED

## Baghdadi 2023 (NATURE)
#### Surgical 'Finesse' SmartForceps
- sensor driven
- 61% of data is kinematic, 29% video

## Davids 2021

## Koskinen 2023 (Grasp) 
- NSGY + PLASTICS

### Pangal 2021 (Tool annotation)

## Deepika 2023


---

# NON-instrument tracking based
#### Glove


#### Gaze

# GENERAL USE CASES OF CV IN NSGY

## Real-Time intraoperative ANATOMICAL guidance
Staartjes 2020

## Screw ID
https://paperpile.com/app/p/a147c271-24ee-079d-98c9-ae0437e29adc

#####

---
