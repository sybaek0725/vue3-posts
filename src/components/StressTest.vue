<template>
	<h2>테스트입니다.</h2>
	<p>stress: 2(24*24), 1(16*16), 0(8*8)</p>
	<br />
	<div class="wrap">
		<div v-for="(word, index) in wordLevel.stressTwo" :key="index" :class="getClass(word.stress)"></div>
	</div>
	<br />
	<div class="wrap">
		<div v-for="(word, index) in wordLevel.stressOne" :key="index" :class="getClass2(word.stress)"></div>
	</div>
</template>

<script setup>
import { ref } from 'vue';

// 강세는 0, 1, 2 세가지 값이다.
// word_stress0 = response_json['wordLevel'][0]['stress'] = 0
// word_stress1 = response_json['wordLevel'][1]['stress'] = 1
// word_stress2 = response_json['wordLevel'][2]['stress'] = 2

const wordLevel = ref({
	stressOne: [
		{
			endTimeInSec: 0.3899,
			index: 0,
			proficiencyScore: [{ max: 100.0, min: 0.0, name: 'acoustic', score: 84.0 }],
			startTimeInSec: 0.14,
			stress: 2,
			text: 'miss',
		},
		{
			endTimeInSec: 0.95,
			index: 1,
			proficiencyScore: [{ max: 100.0, min: 0.0, name: 'acoustic', score: 95.0 }],
			startTimeInSec: 0.3999,
			stress: 1,
			text: 'henry',
		},
		{
			endTimeInSec: 1.37,
			index: 2,
			proficiencyScore: [{ max: 100.0, min: 0.0, name: 'acoustic', score: 94.0 }],
			startTimeInSec: 0.96,
			stress: 0,
			text: 'drank',
		},
		{
			endTimeInSec: 1.5899,
			index: 3,
			proficiencyScore: [{ max: 100.0, min: 0.0, name: 'acoustic', score: 84.0 }],
			startTimeInSec: 1.4299,
			stress: 2,
			text: 'a',
		},
		{
			endTimeInSec: 1.83,
			index: 4,
			proficiencyScore: [{ max: 100.0, min: 0.0, name: 'acoustic', score: 84.0 }],
			startTimeInSec: 1.5999,
			stress: 1,
			text: 'cup',
		},
		{
			endTimeInSec: 2.03,
			index: 5,
			proficiencyScore: [{ max: 100.0, min: 0.0, name: 'acoustic', score: 84.0 }],
			startTimeInSec: 1.84,
			stress: 0,
			text: 'of',
		},
		{
			endTimeInSec: 2.6099,
			index: 6,
			proficiencyScore: [{ max: 100.0, min: 0.0, name: 'acoustic', score: 98.0 }],
			startTimeInSec: 2.04,
			stress: 2,
			text: 'coffee',
		},
		{
			endTimeInSec: 2.03,
			index: 7,
			proficiencyScore: [{ max: 100.0, min: 0.0, name: 'acoustic', score: 84.0 }],
			startTimeInSec: 1.84,
			stress: 0,
			text: 'of',
		},
		{
			endTimeInSec: 2.6099,
			index: 8,
			proficiencyScore: [{ max: 100.0, min: 0.0, name: 'acoustic', score: 98.0 }],
			startTimeInSec: 2.04,
			stress: 2,
			text: 'coffee',
		},
	],
	stressTwo: [
		{
			endTimeInSec: 0.3899,
			index: 0,
			proficiencyScore: [{ max: 100.0, min: 0.0, name: 'acoustic', score: 84.0 }],
			startTimeInSec: 0.14,
			stress: 2,
			text: 'miss',
		},
		{
			endTimeInSec: 0.95,
			index: 1,
			proficiencyScore: [{ max: 100.0, min: 0.0, name: 'acoustic', score: 95.0 }],
			startTimeInSec: 0.3999,
			stress: 1,
			text: 'henry',
		},
		{
			endTimeInSec: 1.37,
			index: 2,
			proficiencyScore: [{ max: 100.0, min: 0.0, name: 'acoustic', score: 94.0 }],
			startTimeInSec: 0.96,
			stress: 0,
			text: 'drank',
		},
		{
			endTimeInSec: 1.5899,
			index: 3,
			proficiencyScore: [{ max: 100.0, min: 0.0, name: 'acoustic', score: 84.0 }],
			startTimeInSec: 1.4299,
			stress: 2,
			text: 'a',
		},
		{
			endTimeInSec: 1.83,
			index: 4,
			proficiencyScore: [{ max: 100.0, min: 0.0, name: 'acoustic', score: 84.0 }],
			startTimeInSec: 1.5999,
			stress: 1,
			text: 'cup',
		},
		{
			endTimeInSec: 2.03,
			index: 5,
			proficiencyScore: [{ max: 100.0, min: 0.0, name: 'acoustic', score: 84.0 }],
			startTimeInSec: 1.84,
			stress: 0,
			text: 'of',
		},
		{
			endTimeInSec: 2.6099,
			index: 6,
			proficiencyScore: [{ max: 100.0, min: 0.0, name: 'acoustic', score: 98.0 }],
			startTimeInSec: 2.04,
			stress: 2,
			text: 'coffee',
		},
		{
			endTimeInSec: 2.03,
			index: 7,
			proficiencyScore: [{ max: 100.0, min: 0.0, name: 'acoustic', score: 84.0 }],
			startTimeInSec: 1.84,
			stress: 0,
			text: 'of',
		},
		{
			endTimeInSec: 2.6099,
			index: 8,
			proficiencyScore: [{ max: 100.0, min: 0.0, name: 'acoustic', score: 98.0 }],
			startTimeInSec: 2.04,
			stress: 2,
			text: 'coffee',
		},
	],
});

const getClass = stress => {
	if (stress === 2) {
		return 'one';
	} else if (stress === 1) {
		return 'two';
	} else {
		return 'three';
	}
};

const getClass2 = stress => {
	if (stress === 2) {
		return 'one2';
	} else if (stress === 1) {
		return 'two2';
	} else {
		return 'three2';
	}
};
</script>

<style scoped>
.wrap {
	display: flex;

	align-items: center;
}
.one {
	width: 24px;
	height: 24px;
	border-radius: 24px;
	background-color: #b3e6ff;
	margin-right: 10px;
}
.two {
	width: 16px;
	height: 16px;
	border-radius: 16px;
	background-color: rgb(11, 215, 246);
	margin-right: 10px;
}
.three {
	width: 8px;
	height: 8px;
	border-radius: 8px;
	background-color: skyblue;
	margin-right: 10px;
}
.wrap div:last-child {
	margin-right: 0;
}

.one2 {
	width: 24px;
	height: 24px;
	border-radius: 24px;
	background-color: #cef483;
	margin-right: 10px;
}
.two2 {
	width: 16px;
	height: 16px;
	border-radius: 16px;
	background-color: rgb(31, 232, 55);
	margin-right: 10px;
}
.three2 {
	width: 8px;
	height: 8px;
	border-radius: 8px;
	background-color: rgb(155, 248, 101);
	margin-right: 10px;
}
.wrap div:last-child {
	margin-right: 0;
}
</style>
