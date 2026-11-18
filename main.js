let getProduct = fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(data => {
        let product = data.products
        console.log(product);
        let wrapper = document.querySelector('.wrapper')
        product.forEach((Element) => {
            let div = document.createElement('div')
            div.className = 'card'
            div.innerHTML = `
            <img src="${Element.thumbnail}" alt="" class="img">
            <p class="title">${Element.title}</p>
            <p class="descp">${Element.description}</p>
            <p class="price">${Element.price}$</p>
            <p class="reyting">${Element.rating}*</p>
            <p class="discaunt">${Element.discountPercentage}%</p>
            `
            wrapper.append(div)
        })
    })

