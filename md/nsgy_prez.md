---
marp: true
theme: default
paginate: true
size: 16:9
---
# Using Computer Vision in the Assessment of Neurosurgical Skill


![bg right](https://imgc.allpostersimages.com/img/posters/damn-it-i-m-a-brain-surgeon-not-a-rocket-scientist-new-yorker-cartoon_u-L-PGPNYV0.jpg?artPerspective=n)

---

# Table of Contents

1. Introduction to Computer Vision [0.5]
2. Computer Vision in Surgery [1]
3. Applications in Surgical Skill [1]


2. Neurosurgical Skill Assessment
- Validation of the UpSurgeOn TNS Box [1]


3. Role of Computer Vision in Neurosurgical Skill Assessment [1]

4. Case Studies of Instrument Based Methods
	- Davids 2021 [1]
	- Pangal 2021 (Tool annotation) [0.5]
	-  Koskinen 2023 (Grasp) [1]
	-  Baghdadi 2023 [1]
	- Deepika 2023 [1]
5. Challenges and Future Perspectives
6. Conclusion

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

![bg left fit](https://share.cleanshot.com/7ljNm3Hrhq1l6HKv6Zfg+)

![](https://share.cleanshot.com/fPJ52hrPzQbm3KmywZ9Y+)

---
# Surgical Skill assessment


![](https://share.cleanshot.com/HHRKqtnlL5CR0nDcNVXD+)

---
# Computer Vision's Achilles Heel?

* Data
* Labels
* Compute

![bg fit right](https://www.imperial.ac.uk/ImageCropToolT4/imageTool/uploaded-images/visionblender-example-results-of-some-generated-ground-truth-map_1601999412678_x2.jpg?r=1646)

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

# Current Applications in Neurosurgery

---

# Surgical Flow

![](https://share.cleanshot.com/cgnjMp2pCdFh5jl3SfhP+)



---
![bg left fit](https://share.cleanshot.com/zfQjTnBX5f413XVWZm9X+)

![](https://share.cleanshot.com/9yxlSJRQrvLhwZK4p0r2+)

---
![bg left fit](https://share.cleanshot.com/GzHxB5L86stqjpdtJX01+)

![](https://share.cleanshot.com/yhChNgdHb0CxlV09qDF0+)

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

---

# Conclusion

- Summarize the presentation
- Final thoughts

---

# Thank You

- Any questions?

---
file:///Users/yilunzhang/Dropbox/slides/test.mp4
# References


---
#### NOTES
marp
### 10 MINUTES



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

<img src="../test.gif" />
---