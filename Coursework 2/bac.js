function encode() 
{ 
    var plain_text = document.getElementById("message").value;
    var cypher_text = [];
    var binary=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','aaaaa',
'aaaab','aaaba','aaabb ','aabaa','aabab','aabba','aabbb','abaaa','abaaa','abaab','ababa','ababb','abbaa','abbab','abbba','abbbb','baaaa','baaab','baaba','baabb','baabb','babaa','babab','babba ','babbb','aaaab','aaaa']

    for(var idx=0; idx<plain_text.length; idx++)
    {
        input = binary.indexOf(plain_text[idx]);
        if(input == -1 )
        {
            cypher_text.push(plain_text[idx]);
        }
        else
        {
            var coded = (input+25)%52;
            var letter = binary[coded];
            cypher_text.push(letter);
        }
    }
//    console.log(plain_text)
//    console.log(cypher_text.join(""))

    document.getElementById("output").innerHTML = cypher_text.join("");
}