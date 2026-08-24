---
title: Typography
lang: en-US
---

# Typography

Styles provider for html content

**Note**: Typography styles in this documentation website is infuenced by injected styles provided by Vitepress' default theme. We will rebuild this website with custom theme using CCK UI components in the future.

## Usage

CCK UI does not include typography global styles. Use `Typography` to add typography styles to your html content:

```vue
<template>
  <c-typography>
    <!-- Your html here -->
  </c-typography>
</template>
```

## Example


<c-paper p="xl" with-border>
  <c-typography>
    <h1>Example article</h1>
    <p>This is example article from <a href="https://css-tricks.com/your-team-is-not-them/" target="_blank" referrerpolicy="no-referrer">CSS-Tricks website</a> written by <a href="https://css-tricks.com/author/sdrasner/" target="_blank" referrerpolicy="no-referrer">Sarah Drasner</a>. It is used as an example to showcase real world styles of Typography component, please read full article on <a href="https://css-tricks.com/your-team-is-not-them/" target="_blank" referrerpolicy="no-referrer">CSS-Tricks website</a>.</p>
    <h2>Article itself</h2>
    <p>Let’s talk for a moment about how we talk about our teams. This might not seem like something that needs a whole article dedicated to it, but it’s actually quite crucial. The way that we refer to our teams sends signals: to stakeholders, to your peers, to the team itself, and even to ourselves. In addressing how we speak about our teams, we’ll also talk about accountability.</p>
    <p>I have noticed shared similarities in those folks I consider good managers whose teams deliver well, and those who don’t. It starts with how they communicate about their teams.</p>
    <h3>Your team is “we”</h3>
    <p>There can be a perception that as a manager of an organization you are in control at all times. Part of that control can invariably be perceived as how you appear to be in charge, are competent, or how you personally perform. Due to that, some bad behaviors can arise- not due to malice, but due to fear. For this reason, it can be tempting to take credit for success and avoid credit when there is failure.</p>
    <p>The irony is that the more that you try to hold on to these external perceptions, the more it will slip away. Why? <strong>Because the problems you are solving as a manager really aren’t about you.</strong></p>
    <p><strong>Your team is “we”.</strong> You are a driving force of that team, no matter how high up the hierarchy chain. What happens on that team is your responsibility. When you speak about your org, you should include yourself in the statement.</p>
    <p>When your team succeeds in something though, then you can praise them and leave yourself out of it. Here’s an example:</p>
    <p><em>They really pulled this project over the line, despite the incredibly tight project timeline. Everyone showed up and was driven throughout the engagement. They did a fantastic job.</em></p>
    <p>However, if the team failed at something, the pronoun is then <strong>I</strong>:</p>
    <p><em>I didn’t recognize how tight this turnaround was and failed to prioritize the team’s time well. I need to reconvene with everyone so we can come up with a better plan.</em></p>
    <p>And never, ever <strong>them</strong>:</p>
    <p><em>They didn’t adhere to this tight timeline. They just weren’t able to get this project over the line.</em></p>
    <p>Do you see how the last example shirks responsibility for what occurred? Too often I will hear managers relieve themselves of their duties when shit hits the fan, and that is exactly when a manager needs to step up, and dive in to the problems that <strong>are their responsibility</strong>.</p>
    <h3>The wider organization</h3>
    <p>There is another piece of this too, and it impacts how your team operates. It’s that your job is not to be the ambassador of who you manage and think of every other group as separate. You're part of a larger system. A company is composed of groups, but those groups can only be successful if they’re working together, not if they are protecting their own org at all costs.</p>
    <p>I admit I didn’t fully understand the depth of this until I read Patrick Lencioni’s <a href="https://www.amazon.com/Advantage-Organizational-Health-Everything-Business/dp/0470941529/" target="_blank" referrerpolicy="no-referrer">The Advantage</a> thanks to Dalia Havens, a peer at Netlify. In the book, Lencioni talks about how organizational health, not “being smart”, as the biggest key to success. Plenty of smart people with good ideas build companies and see them fail. <strong>Success lies in being able to work together</strong>.</p>
    <p>Fundamentally, other groups at the company are not separate from your group, rather that you’re all part of one whole. <strong>The Leadership Team is also a team, and should be treated as your team. How you speak about this team is equally important</strong>.</p>
    <p>As such, when we talk about successes and failures of any groups, these should also be shared. There should be a sense that you’re all working towards a common goal together, and every group contributes to it. Within a leadership team there should be trust and vulnerability to own their part so that the whole organization can operate at its best.</p>
  </c-typography>
</c-paper>

## All styles demo

`Typography` includes styles for:

- paragraphs
- headings
- lists
- blockquotes
- tables
- links
- images
- hr
- kbd
- code and pre

<c-paper p="xl" with-border>
  <c-typography>
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <h4>Heading 4</h4>
    <h5>Heading 5</h5>
    <h6>Heading 6</h6>
    <hr />
    <a href="https://cck-ui.jackatlas.xyz/" target="_blank" referrerpolicy="no-referrer">CCK UI</a>
      <p>
        Lorem ipsum, dolor sitamet consectetur adipisicing elit. Provident omnis laudantium itaque
        quisquam est, magnam harum, cum molestias necessitatibus obcaecati quod esse debitis velit
        nemo dolores deserunt. Quia, iure doloremque.
      </p>
      <img src="https://picsum.photos/400/300" alt="lorem picsum photo" />
      <ul>
        <li>list item - 1</li>
        <li>list item - 2</li>
        <li>list item - 3</li>
        <li>list item - 4</li>
      </ul>
      <ol>
        <li>list item - 1</li>
        <li>list item - 2</li>
        <li>list item - 3</li>
        <li>list item - 4</li>
      </ol>
      <blockquote>
        Life is like an npm install - you never know what you are going to get. - Forrest Gump
      </blockquote>
      <p>This is <code>code</code>, <kbd>kbd</kbd> and <mark>mark</mark> inside paragraph</p>
      <pre>import { CAvatar } from '@cck-ui/core'<br />import image from './image.png'</pre>
      <table>
        <thead>
          <tr>
            <th>Element position</th>
            <th>Element name</th>
            <th>Symbol</th>
            <th>Atomic mass</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>6</td>
            <td>Carbon</td>
            <td>C</td>
            <td>12.011</td>
          </tr>
          <tr>
            <td>7</td>
            <td>Nitrogen</td>
            <td>N</td>
            <td>14.007</td>
          </tr>
          <tr>
            <td>39</td>
            <td>Yttrium</td>
            <td>Y</td>
            <td>88.906</td>
          </tr>
          <tr>
            <td>56</td>
            <td>Barium</td>
            <td>Ba</td>
            <td>137.33</td>
          </tr>
          <tr>
            <td>58</td>
            <td>Cerium</td>
            <td>Ce</td>
            <td>140.12</td>
          </tr>
        </tbody>
      </table>
    </c-typography>
</c-paper>