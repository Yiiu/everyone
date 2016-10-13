# tooltips

<template>
    <y-tooltips
        placement="top"
        trigger="click"
        content="stset"
        theme="white"
    >
    	<y-button slot="html">blue</y-button>
        <div slot="content">
            <ul>
                <li>safasdf</li>
                <li>safasdf</li>
                <li>safasdf</li>
            </ul>
        </div>
    </y-tooltips>
    <y-tooltips
        placement="top"
        trigger="hover"
        content="stset"
        theme="white"
    >
    	<y-button slot="html">blue</y-button>
        <div slot="content">
            <ul>
                <li>safasdf</li>
                <li>safasdf</li>
                <li>safasdf</li>
            </ul>
        </div>
    </y-tooltips>
    <y-tooltips
        placement="top"
        trigger="focus"
        content="stset"
        theme="white"
    >
    	<input type="text" name="name" value="" slot="html">
        <div slot="content">
            <ul>
                <li>safasdf</li>
                <li>safasdf</li>
                <li>safasdf</li>
            </ul>
        </div>
    </y-tooltips>
</template>
