const button = document.getElementById("prepend") as HTMLButtonElement;
const input1 = document.getElementById("numSpaces") as HTMLInputElement;
const input2 = document.getElementById("stringToPrepend") as HTMLInputElement;

button!.addEventListener("click", function () {
    console.log(prepend([input1!.value,input2!.value]));
});

function prepend<T>(arr: T[]): string {
    let aString:string = "";
    for(let i = 0; i<+arr[0];i++)
    {
        aString+=" ";
    }
    return aString+=arr[1];
}