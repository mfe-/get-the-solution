


Example 2:

![Fig. 2. sampling frequency sample](assets/img/blog/sip/sampling_frequency_sample2.png){ width=240 }

Notice: Event number 10. is not considered as it belongs to the next "snapshot".

$f_s = \frac{10}{1s}=10Hz$

Amplitude for  x[2]=2,x[4]=2, x[5]=1,

The sampling process from the continues time domain to discret time domain can be annotated like the following:

$x(t) -> x(nTs) : x[n]$

Values from continuous time domain -> only take values of x we observed at the time nTs : to retriev the values for x[n]

![Fig. 3. discrete signal example](assets/img/blog/sip/discrete_signal_example.png){ width=240 }

Note: From the above sample we cannot determine what the sampling frequency was as we dont know how much time was used for how many samples.



continuous



## Characteristics Of Signal

https://staff.fnwi.uva.nl/r.vandenboomgaard/SP20162017/SystemsSignals/plottingsignals.html

Jean Baptiste Joseph Fourier (1768–1830) showed that, complicated but periodic functions are written as the sum of simple waves mathematically represented by sines and cosines. [2](https://en.wikipedia.org/wiki/Fourier_transform#Introduction)

Knowing that a compilated periodic signal is composed of several other signals enables us to filter or amplify certain signal of interesst.

Every periodic oscillation can be approximated with a harmonic sum of sin- or cos-oscillation [3](https://www.medien.ifi.lmu.de/lehre/ws1011/dm/dm4.pdf).

...

$x(t)=\sum_{k=0}^{\infty} a_k*cos(k*\omega_0*t+\theta_k)$

### Frequency

Frequency is the number of occurrences of a repeating event per unit of time.[[3]](https://en.wikipedia.org/wiki/Frequency) defined by:

$f = \frac{1}{T}$

A sampling frequency contains the amount 
$f_s ... sampling frequency
$T_s ... distance between samples

As a example: Sine wave of various frequencies,

![(sin wave)](assets/img/sin-waves-diffrent-frequencies.png){ width=120 }

## Discrete Fourier transform (DFT)

## Sampling (Continues time signal to discret signal)

continues in time, sample signal, to obtain

on which conditions we can reconstrcut continues time signal from discret signal?
-> under certain conditions its possible to reconstruct from discret signal to the full continues time signal

X(t)->sample -> X[n]-> reconstruct X(t)

## Build with

https://staff.fnwi.uva.nl/r.vandenboomgaard/SP20162017/SystemsSignals/plottingsignals.html




`pandoc 20.09.01-Signal-processing-overview.md -o 20.09.01-Signal-processing-overview.html -s --highlight-style zenburn --mathjax`
