import Vue from 'vue';
import sitters from "@/data/sitters.json";
import comments from "@/data/comments.json";
import chats from "@/data/chats.json"

let globalData = new Vue({
    data: {
            $comments: comments,
            $sitters: sitters,
            $chats: chats,
            $user: {
                $userId: 0,
                $userName: "Peeter Paavo"
            }
        }
})

Vue.mixin({
    computed: {
        $comments: {
            get: function() {
                return globalData.$data.$comments;
            },
            set: function(newComments) {
                globalData.$data.comments = newComments;
            }
        },
        $sitters: {
            get: function() {
                return globalData.$data.$sitters;
            },
            set: function(newSitters) {
                globalData.$data.sitters = newSitters;
            }
        },
        $chats: {
            get: function() {
                return globalData.$data.$chats;
            },
            set: function(newChats) {
                globalData.$data.$chats = newChats;
                console.log(globalData.$data.$chats);
            }
        },
        $user: {
            get: function() {
                return globalData.$data.$user;
            },
            set: function(newUser) {
                globalData.$data.$user = newUser;
            }
        }
    }
})