---
marp: true
theme: default
paginate: true
size: 16:9
header: '3/8/24'
footer: 'slides.yilunzhang.com'
---
## To bleed or not to bleed: 
#### Use of AI in predicting rebleeding gastric ulcers and the Forrest Classification

Yilun Zhang
Tufts Medical Center
March 8th, 2024
![bg right fit](https://i.pinimg.com/736x/5c/29/f2/5c29f2b50cf1f8be86ded7aadde5c6ed.jpg)

---
# Disclosures
### None relevant
- SurgiBox
- Microsoft/Nuance Health

---
# Existing *risk* models
- **HAS-BLED** (hypertension, abnormal kidney and liver function, stroke, bleeding, labile international normalized ratio, elder age, and drug or alcohol use), 
- **ATRIA** (anticoagulation and risk factors in atrial fibrillation), 
- **ORBIT** (Outcomes Registry for Better Informed Treatment of Atrial Fibrillation), and 
- **HEMORR2HAGES** (hepatic or kidney disease, ethanol abuse, malignancy, older age, reduced platelet count or function, rebleeding, hypertension, anemia, genetic factors, excessive fall risk, and stroke)

Several ML models have outperformed HAS-BLED
- AUC of up to 0.91 vs 0.61 (HAS-BLED)

---

![bg fit](https://img.grepmed.com/uploads/13837/gastroenterology-upper-classification-egd-gibleed-original.jpeg)


---
# Very Brief Introduction to Computer Vision
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
# Survey of A.I. Applications to Guide Clinical Decision Making
---
![bg fit](https://pub.mdpi-res.com/jcm/jcm-10-03527/article_deploy/html/images/jcm-10-03527-g001.png?1628682371)

---
![bg fit](https://www.mdpi.com/jcm/jcm-10-03527/article_deploy/html/images/jcm-10-03527-g002.png)

---
![bg fit](https://www.mdpi.com/jcm/jcm-10-03527/article_deploy/html/images/jcm-10-03527-g003.png)

---
![bg fit](https://www.thieme-connect.de/media/endoscopy/EFirst/10-1055-a-2252-4874_22531321.jpg)

---
![bg fit](https://www.mdpi.com/diagnostics/diagnostics-12-01066/article_deploy/html/images/diagnostics-12-01066-g002.png)

---

![bg fit](https://pbs.twimg.com/media/FUcYknjXsAInSR2.jpg)

---
# Assessing Re-bleeding risk after EGD
---
# Design
- 48 collected variables
- LASSO Regression used for Feature Selection and dimensional reduction

### Five Variables
- albumin (hypo)
- PT (prolonged)
- Shock
- Hematemesis/melena
- Forrest classification

**Highest risk of re-bleeding within THREE days s/p EGD**

---
![bg fit](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8843020/bin/12876_2022_2145_Fig2_HTML.jpg)

---
![bg fit](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8843020/bin/12876_2022_2145_Fig3_HTML.jpg)

---
![bg fit](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8843020/bin/12876_2022_2145_Fig6_HTML.jpg)

---