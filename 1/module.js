// InitModule
function InitModule()
{
}

// ShutdownModule
function ShutdownModule()
{
}


function SuperBack() {

subslides=g_oSlide.selectNodes("frames/frame");
if(g_oSlideFrame.getAttribute("id")==subslides[0].getAttribute("id")){
	var oPreviousSlide = g_oSlide.previousSibling;
	while (oPreviousSlide != null && oPreviousSlide.nodeType != 1)
		oPreviousSlide = oPreviousSlide.previousSibling;
	if (oPreviousSlide != null){
		subslides=oPreviousSlide.selectNodes("frames/frame");
		if(subslides.length > 1)
			OpenSlide(oPreviousSlide, subslides[subslides.length -1].getAttribute("id"), true);
		else
			PreviousSlide();
	}			
} else {
PreviousFrame();
}
}

function SuperNext() {

try{
isthereanext=g_oSlideFrame.nextSibling.getAttribute("id");
isthereanext=true;
}
catch(err){
isthereanext=false;}
if(isthereanext){
NextFrame();
} else {
NextSlide();
}}