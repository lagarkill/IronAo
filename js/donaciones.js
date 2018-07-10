const donaciones = [
    {
        "id": 1,
        "descripcion" : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam officiis eum molestias, pariatur non eius?",
        "precio": "$1415"
    },
    {
        "id": 2,
        "descripcion" : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam officiis eum molestias, pariatur non eius?",
        "precio": "$1415"
    },
    {
        "id": 3,
        "descripcion" : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam officiis eum molestias, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam officiis eum molestias, pariatur non eius?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam officiis eum molestias, pariatur non eius?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam officiis eum molestias, pariatur non eius?pariatur non eius?",
        "precio": "$1415"
    },
    {
        "id": 4,
        "descripcion" : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam officiis eum molestias, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam officiis eum molestias, pariatur non eius?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam officiis eum molestias, pariatur non eius?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam officiis eum molestias, pariatur non eius?pariatur non eius?",
        "precio": "$1415"
    },
    {
        "id": 5,
        "descripcion" : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam officiis eum molestias, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam officiis eum molestias, pariatur non eius?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam officiis eum molestias, pariatur non eius?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam officiis eum molestias, pariatur non eius?pariatur non eius?",
        "precio": "$1415"
    },
    {
        "id": 5,
        "descripcion" : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam officiis eum molestias, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam officiis eum molestias, pariatur non eius?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam officiis eum molestias, pariatur non eius?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam officiis eum molestias, pariatur non eius?pariatur non eius?",
        "precio": "$1415"
    }
]

const tablaDonaciones = ()=>{
        let htmlTemplate = `                        
            <th class="title description">Descripcion</th>
            <th class="title price">Precio</th>
           `;
        donaciones.forEach((element)=>{
            htmlTemplate += `
                    <tr class="table-row">
                        <td class="table-column">${element.descripcion}</td>
                        <td class="table-column table-price">${element.precio}</td>
                    </tr>
                `;
        })

    document.getElementById('table').innerHTML = htmlTemplate;
};

tablaDonaciones();

const buy = document.getElementById('buy');

buy.onclick = ()=>{
    const ul = document.getElementById('buy-ul');
    if(ul.style.display == "block"){
        ul.style.display = "none";
    } else{
        ul.style.display = "block";
    }    
}
