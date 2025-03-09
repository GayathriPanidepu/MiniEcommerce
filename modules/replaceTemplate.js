module.exports=(template,product)=>{
    let output=template.replace(/{%TITLE%}/g,product.title)
    output=output.replace(/{%ID%}/g,product.id)
    output=output.replace(/{%IMAGE%}/g,product.image)
    output=output.replace(/{%DISCPRICE%}/g,product.disc_price)
    output=output.replace(/{%RATINGS%}/g,product.rating)
    output=output.replace(/{%BOUGHT%}/g,product.bought)
    output=output.replace(/{%DISCOUNT%}/g,product.discount)
    output=output.replace(/{%ORGPRICE%}/g,product.org_price)
    output=output.replace(/{%EMI%}/g,product.emi)
    output=output.replace(/{%BRAND%}/g,product.brand)
    return output
}