# Carousel with Tailwindcss

### purge css   
- manually remove unused styles
- set preserveHtmlElements: false to remove all basic HTML element styles  
<pre>
purge: {
    enabled: true,
    preserveHtmlElements: false,
    content: ['./index.html'],
  },
</pre>