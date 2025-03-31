---
title: 'Elsa Jouvenceau ,BOBIN '
updated: 2024-03-29T10:20:43
created: 2024-03-15T13:21:41
---

Elsa Jouvenceau ,BOBIN
Friday, March 15, 2024
1:21 PM

A2 Top 10 Owasp
<http://192.168.0.137:7575/b/cyber-A2>
<http://10.0.0.10:7575/b/cyber-A2>

[\[A02\](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/))
**A02:2021 – Cryptographic Failures**
**Overview:**
\- Previously known as Sensitive Data Exposure, this category focuses on failures related to cryptography, leading to the exposure of sensitive data.
\- Common Weakness Enumerations (CWEs) include Use of Hard-coded Password (CWE-259), Broken or Risky Crypto Algorithm (CWE-327), and Insufficient Entropy (CWE-331).
**Description:**
\- It's essential to assess the protection needs of data in transit and at rest, especially for sensitive information like passwords, credit card numbers, and health records.
\- Various checks should be performed to ensure secure transmission and storage of data, including encryption enforcement, validation of server certificates, proper key management, and avoidance of deprecated cryptographic functions.
**Prevention Measures:**
\- Classify sensitive data and avoid storing it unnecessarily. Encrypt sensitive data at rest and in transit using strong algorithms and protocols.
\- Implement proper key management, enforce encryption, disable caching for sensitive data responses, and use secure hashing functions for password storage.
\- Ensure appropriate initialization vectors, use authenticated encryption, and generate cryptographic keys randomly.
\- Avoid deprecated cryptographic functions and padding schemes, and independently verify the effectiveness of security configurations.
**Example Attack Scenarios:**
\- SQL injection flaw exploiting automatic database decryption, interception of session cookies through insecure connections, and exposure of unsalted password hashes through file upload flaws.
**References:**
\- OWASP resources on proactive controls, application security verification, transport layer protection, user privacy protection, password storage, cryptographic storage, and testing for weak cryptography offer further guidance and best practices.
**[\[Real life exemple\](https://www.horangi.com/blog/real-life-examples-of-web-vulnerabilities](https://www.horangi.com/blog/real-life-examples-of-web-vulnerabilities))**

