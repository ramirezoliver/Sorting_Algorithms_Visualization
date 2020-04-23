const BACKGROUND_FILL = 50;
const COMPARE_FILL = '#8B0000';
const DEFAULT_FILL = 255;
const SORTED_FILL = '#99ff33';

const CANVAS_LENGTH = 1201;
const CANVAS_HEIGHT = 400;

var NUM_ELEMENTS = 112;


//Visualized_array class
class Visualized_Array{   
    constructor(elements = []){
        this.elements = elements;
        this.states = Array(this.elements.length).fill(0);
    }

    generate_array(num_elements, max_value){
        this.elements = Array(num_elements)
        this.states = Array(num_elements).fill(0)
    

        for (let i = 0; i < this.elements.length; i++){
            var _rand = Math.random()
            this.elements[i] = _rand*(max_value) + 20*(1-_rand);
        }
    }
}

_visualized_array = new Visualized_Array([])

function setup(){
    let cnv = createCanvas(CANVAS_LENGTH, CANVAS_HEIGHT);
    cnv.parent("sketch");
    background(BACKGROUND_FILL);
    frameRate(10);
}

//Visualization
function draw(){
    background(BACKGROUND_FILL);

    let _elements = _visualized_array.elements
    let _states = _visualized_array.states

    w = width/(_elements.length + 1)
    m = (width - w * _elements.length) / 2
        
    for (let i = 0; i < _elements.length; i++){
        stroke(0);

        if (_states[i] == 1){
            fill(SORTED_FILL);

        } else{
            fill(DEFAULT_FILL);
        }

        rect(i * w + m, height - _elements[i], w, height);
    }

}

//buttons
function trigger_QuickSort(){
    let elements = _visualized_array.elements
    QuickSort(elements,0,elements.length-1);
    verify_sorted(_visualized_array.elements);
}


//Functionality
function generate_array(){
    _visualized_array.generate_array(NUM_ELEMENTS, CANVAS_HEIGHT)
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function verify_sorted(arr) {
    var is_sorted = true;
    
    for (let i = 1; i < arr.length; i++){
        if (arr[i-1] > arr[i]){

            is_sorted = false;
            
            break;
        } else{
        }
    }
    return is_sorted;
}


//quick sort
function qs_partition(arr, start, end){
   
    let j = start;
    let tmp;
    for (let i = start; i < end; i++){
        if (arr[i] < arr[end]){
            
            //swap i and j values
            tmp = arr[i]
            arr[i] = arr[j]
            arr[j] = tmp


            j = j+1;
        }

    }
    //swap pivot and j values
    tmp = arr[j]
    arr[j] = arr[end]
    arr[end] = tmp

    return j
}

function QuickSort(arr, start, end){
    if (start < end){

        let q = qs_partition(arr, start, end);

        QuickSort(arr,start,q-1);
        QuickSort(arr,q+1,end);
    }
}