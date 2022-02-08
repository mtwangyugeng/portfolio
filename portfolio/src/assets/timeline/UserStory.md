# Career timeline

- TODO: what is the best accessbility approach for timeline?

- Example usage: ```javescript
    <Timeline timeline={[
      {
        date:new Date("1996-07-09"),
        text:'Bob is born in Jacksville Florida. The best city of the USA.',
        tag: {
          title: 'twitter',
          color: '#1DA1F2'
        },
        link: {
          url: '#!',
          text: 'Check it out on GitHub'
        }
      },
        {
          date:new Date("1996-07-09"),
          text:'Bob is born in Jacksville Florida. The best city of the USA.',
          tag: {
            title: 'Github',
            color: 'red'
          },
          link: {
            url: '#!',
            text: 'Check it out on GitHub'
          }
        }
        ,
        {
          date:new Date("1996-07-09"),
          text:'Bob is born in Jacksville Florida. The best city of the USA.',
          tag: {
            title: 'Github',
            color: 'red'
          },
          link: {
            url: '#!',
            text: 'Check it out on GitHub'
          }
        }
    ]} />
    ```