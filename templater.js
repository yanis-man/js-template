class Templater
{
    constructor()
    {
        this.HTMLTemplate = ""
    }
    async loadHTML(url)
    {
        this.HTMLTemplate = await (await fetch(url)).text()
    }
    async replace(url, data)
    {
        await this.loadHTML(url)
        let reg; 
        let finalHTML;
        Object.keys(data).forEach(key => {
            reg = new RegExp(`{{${key}}}`, 'g')
            finalHTML = this.HTMLTemplate.replaceAll(reg, data[key])
        })
        return finalHTML;
    }
    async mAll(url, data)
    {
        await this.loadHTML(url)
        let reg;
        let finalHTML ="";
        let tempHTMLTemplate = "";
        for(let i=0;i<data.length+1;i++)
        {
            tempHTMLTemplate = this.HTMLTemplate;
            Object.keys(data[i]).forEach(key => {
                reg = new RegExp(`{{${key}}}`, 'g')
                console.log(key)
                finalHTML += tempHTMLTemplate.replaceAll(reg, data[i][key])
            })
            return finalHTML;
        }
    }
}

export {Templater};