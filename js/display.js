function createRow(container, student_name, samples){
    const row=document.createElement('div');
    row.classList.add('row');
    container.appendChild(row);

    const row_label=document.createElement('div')
    row_label.innerHTML=student_name;
    row_label.classList.add('rowLabel')
    row.appendChild(row_label)

    for(let sample of samples){
        const {id, label}=sample;

        let sampleContainer=document.createElement('div');
        sampleContainer.id='sample_'+id;
        sampleContainer.classList.add('sampleContainer');

        const sampleLabel=document.createElement('div')
        sampleLabel.innerHTML=label;
        sampleContainer.appendChild(sampleLabel)

        let img=document.createElement('img');
        const imgPath=constant.IMG_DIR+'/'+id+'.png';
        img.src=imgPath
        img.classList.add('thumb')
        sampleContainer.appendChild(img);
        row.appendChild(sampleContainer)
    }
}
